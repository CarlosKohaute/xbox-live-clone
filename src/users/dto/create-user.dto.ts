import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  user: string;

  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;
}
