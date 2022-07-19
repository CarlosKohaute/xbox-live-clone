import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsUUID, ValidateNested } from 'class-validator';
import { CreateOrderToProductDto } from './create-order-to-product.dto';

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

  @ValidateNested({ each: true })
  @Type(() => CreateOrderToProductDto)
  @ApiProperty({
    description: `Lista de id's dos jogos sendo cadastrados`,
    example: `[{'2173d0bc-e083-44af-bd0b-c9bf1dd2e94c'}, {'9a00bea1-0288-453b-9eae-f1efbba805fa'}]`,
  })
  products: CreateOrderToProductDto[];
}
