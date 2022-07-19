import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleErrorConstraintUnique } from 'src/utils/handle-erros-unique.util';
import { CreateProductDto } from './dto/create-product.dto';
import { FavoriteProductDto } from '../favorites/dto/favorite.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Favorite } from 'src/favorites/entities/favorite.entitie';
import { User } from 'src/users/entities/users.entity';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateProductDto): Promise<Product | void> {
    return this.prisma.product
      .create({ data })
      .catch(handleErrorConstraintUnique);
  }

  findAll(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  async verifyIdAndReturnProduct(id: string): Promise<Product> {
    const product: Product = await this.prisma.product.findUnique({
      where: { id },
    });
    if (!product) {
      throw new NotFoundException(`Entrada de id '${id}' não encontrada`);
    }

    return product;
  }

  findOne(id: string): Promise<Product> {
    return this.verifyIdAndReturnProduct(id);
  }
  async findUsersLiked(id: string) {
    const product: Product = await this.verifyIdAndReturnProduct(id);
    return this.prisma.favorite.findMany({
      where: { productName: product.name },
      select: {
        productName: true,
        user: { select: { name: true, email: true } },
      },
    });
  }
  async update(id: string, dto: UpdateProductDto): Promise<Product | void> {
    await this.verifyIdAndReturnProduct(id);

    return this.prisma.product
      .update({ where: { id }, data: dto })
      .catch(handleErrorConstraintUnique);
  }

  async remove(id: string) {
    await this.verifyIdAndReturnProduct(id);

    return this.prisma.product.delete({ where: { id } });
  }

  //recriar os módulos de fav
  async favorite(dto: FavoriteProductDto): Promise<Favorite> {
    const product: Product = await this.prisma.product.findUnique({
      where: { name: dto.productName },
    });

    if (!product) {
      throw new NotFoundException(
        `Jogo de nome '${dto.productName}' não encontrado`,
      );
    }

    const user: User = await this.prisma.user.findUnique({
      where: { id: dto.userId },
    });

    if (!user) {
      throw new NotFoundException(
        `Entrada de id '${dto.userId}' não encontrada`,
      );
    }
    const data: Prisma.FavoriteCreateInput = {
      user: {
        connect: {
          id: dto.userId,
        },
      },
      product: {
        connect: {
          name: dto.productName,
        },
      },
    };

    return this.prisma.favorite.create({ data });
  }

  async unfav(id: string) {
    await this.verifyIdAndReturnProduct(id);

    return this.prisma.favorite.delete({ where: { id } });
  }
}
