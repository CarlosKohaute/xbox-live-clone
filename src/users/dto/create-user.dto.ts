import { IsEmail, IsString } from 'class-validator';
export class CreateUserDto {
  @IsString()
  name: string;

  user: string;

  @IsEmail()
  email: string;
}
