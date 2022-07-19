import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}
  create(dto: CreateOrderDto) {
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
        connect: dto.products.map((element) => ({ id: element })),
      },
    };

    return this.prisma.order.create({
      data,
      select: {
        id: true,
        genre: { select: { genre: true } },
        user: { select: { id: true, name: true } },
        createdAt: true,
        products: { select: { name: true } },
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
        products: { select: { name: true } },
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
        products: { select: { name: true } },
      },
    });
  }

  update(id: string, dto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: string) {
    return `This action removes a #${id} order`;
  }
}
