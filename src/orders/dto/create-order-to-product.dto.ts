import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class CreateOrderToProductDto {
  @IsUUID()
  @ApiProperty({
    description: 'Id do jogo sendo incluso no perfil',
    example: '2173d0bc-e083-44af-bd0b-c9bf1dd2e94c',
  })
  productId: string;
}
