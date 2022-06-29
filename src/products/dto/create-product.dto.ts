import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsUrl } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome do produto',
    example: 'Gears of war',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Descrição do game',
    example:
      'Gears of War é um jogo eletrônico de tiro em terceira pessoa de ficção científica, produzido pela Epic Games, publicado pela Microsoft Game Studios e lançado no dia 7 de Novembro de 2006, inicialmente com exclusividade para Xbox 360. Foi pela primeira vez revelado por Cliff Bleszinski na E3 de 2005.',
  })
  description: string;

  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @ApiProperty({
    description: 'Preço do produto',
    example: 59.99,
  })
  price: number;

  @IsUrl()
  @ApiProperty({
    description: 'Link da imagem do produto',
    example:
      'https://upload.wikimedia.org/wikipedia/pt/thumb/8/82/Gears_of_War.png/200px-Gears_of_War.png',
  })
  image: string;
}
