export class RegisterUserRequest {
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
}

export class LoginUserRequest {
  email?: string;
  password?: string;
}

export class UserResponse {
  first_name: string;
  last_name: string;
  email: string;
  token?: string;
}
