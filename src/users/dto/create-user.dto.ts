import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'User name',
    example: 'Carlos',
  })
  name: string;

  @ApiProperty({
    description: 'User e-mail',
    example: 'carlos.kohaute.contato@gmail.com',
  })
  @IsEmail()
  email: string;
}
