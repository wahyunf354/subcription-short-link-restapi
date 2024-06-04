import { Injectable } from '@nestjs/common';
import { PrismaService } from '../src/common/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class TestService {
  constructor(private prismaService: PrismaService) {}

  async createUser() {
    await this.prismaService.user.create({
      data: {
        email: 'test@example.com',
        firstName: 'test',
        lastName: 'test',
        password: await bcrypt.hash('test', 10),
        token: 'test',
      },
    });
  }

  async deleteUser() {
    await this.prismaService.user.deleteMany({
      where: {
        email: 'test@example.com',
      },
    });
  }
}
