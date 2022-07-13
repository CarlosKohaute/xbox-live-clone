import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Categoria, se o jogo é indie ou triple A por exemplo',
    example: 'Indie',
  })
  name: string;
}
