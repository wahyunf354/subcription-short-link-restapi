import { HttpException, Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { ValidationService } from '../../src/common/validation.service';
import {
  LoginUserRequest,
  RegisterUserRequest,
  UserResponse,
} from '../../src/model/user.model';
import { Logger } from 'winston';
import * as bcrypt from 'bcrypt';
import { UserValidation } from './user.validation';
import { PrismaService } from '../../src/common/prisma.service';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UserService {
  constructor(
    private validationService: ValidationService,
    @Inject(WINSTON_MODULE_PROVIDER) private logger: Logger,
    private prismaService: PrismaService,
  ) {}

  async register(request: RegisterUserRequest): Promise<UserResponse> {
    this.logger.info(`Register User: ${JSON.stringify(request)}`);

    const registerRequest: RegisterUserRequest =
      this.validationService.validate(UserValidation.REGISTER, request);

    const totalUserWithSameEmail = await this.prismaService.user.count({
      where: {
        email: registerRequest.email,
      },
    });

    if (totalUserWithSameEmail != 0) {
      throw new HttpException('Email Already Exists', 400);
    }

    registerRequest.password = await bcrypt.hash(registerRequest.password, 10);

    const user = await this.prismaService.user.create({
      data: {
        firstName: registerRequest.first_name,
        lastName: registerRequest.last_name,
        password: registerRequest.password,
        email: registerRequest.email,
      },
    });

    return {
      first_name: user.firstName,
      last_name: user.lastName,
      email: user.email,
    };
  }

  async login(request: LoginUserRequest): Promise<UserResponse> {
    this.logger.info('Login User : ' + JSON.stringify(request));

    // Vilidasi
    const loginUserRequest: LoginUserRequest = this.validationService.validate(
      UserValidation.LOGIN,
      request,
    );

    // find user by email in db
    let user = await this.prismaService.user.findFirst({
      where: {
        email: loginUserRequest.email,
      },
    });

    if (!user) {
      throw new HttpException('Email or password wrong', 401);
    }

    // matching password
    const isValidPassword = await bcrypt.compare(
      loginUserRequest.password,
      user.password,
    );

    if (!isValidPassword) {
      throw new HttpException('Email or password wrong', 401);
    }

    // generate token and save on db
    user = await this.prismaService.user.update({
      where: {
        email: user.email,
      },
      data: {
        token: uuid(),
      },
    });

    return {
      first_name: user.firstName,
      last_name: user.lastName,
      email: user.email,
      token: user.token,
    };
  }
}
