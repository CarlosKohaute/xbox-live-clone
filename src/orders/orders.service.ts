import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}
  create(dto: CreateOrderDto) {
    const productsIds = dto.products.map((element) => ({
      productId: element.productId,
    }));

    const data: Prisma.OrderCreateInput = {
      genre: {
        connect: { genre: dto.genre },
      },
      user: {
        connect: {
          id: dto.userId,
        },
      },
      products: {
        createMany: {
          data: productsIds,
        },
      },
    };

    return this.prisma.order.create({
      data,
      select: {
        id: true,
        genre: { select: { genre: true } },
        user: { select: { name: true } },
        products: { select: { product: { select: { name: true } } } },
      },
    });
  }

  findAll() {
    return this.prisma.order.findMany({
      select: {
        id: true,
        genre: { select: { genre: true } },
        user: { select: { id: true, name: true } },
        createdAt: true,
        products: { select: { product: { select: { name: true } } } },
      },
    });
  }

  findOne(id: string) {
    return this.prisma.order.findUnique({
      where: { id },
      select: {
        id: true,
        genre: { select: { genre: true } },
        user: { select: { id: true, name: true } },
        createdAt: true,
        products: { select: { product: { select: { name: true } } } },
      },
    });
  }

  // finalizar rota de criação
  update(id: string, dto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  //finalizar a rota de deleção
  remove(id: string) {
    return `This action removes a #${id} order`;
  }
}
