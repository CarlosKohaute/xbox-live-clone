import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @ApiProperty({
    description: 'Genero de algum jogo do perfil',
    example: 'Fps',
  })
  genre?: string;

  @IsUUID()
  @ApiProperty({
    description: 'Id do usuário proprietario do perfil',
    example: '6e7f772f-398c-489f-a4f6-ab0bf4144500',
  })
  userId: string;

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: `Lista de id's dos jogos sendo cadastrados`,
    example: `['2173d0bc-e083-44af-bd0b-c9bf1dd2e94c', '9a00bea1-0288-453b-9eae-f1efbba805fa']`,
  })
  products: string[];
}
