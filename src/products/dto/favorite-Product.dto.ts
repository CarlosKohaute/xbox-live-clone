import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class FavoriteProductDto {
  @IsUUID()
  @ApiProperty({
    description: 'Id do usuário que está favoritando o produto',
    example: '3b4a92b2-6dbf-4efd-bf35-2aa125177a47',
  })
  userId: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome do jogo a ser favoritado',
    example: 'Gears of war',
  })
  productName: string;
}
