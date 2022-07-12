import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGenreDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Gênero do jogo.',
    example: 'Fps',
  })
  genre: string;
}
