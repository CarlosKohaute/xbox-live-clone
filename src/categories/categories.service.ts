import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { handleErrorConstraintUnique } from 'src/utils/handle-erros-unique.util';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}
  async create(dto: CreateCategoryDto): Promise<Category> {
    return this.prisma.category
      .create({ data: dto })
      .catch(handleErrorConstraintUnique);
  }

  findAll(): Promise<Category[]> {
    return this.prisma.category.findMany();
  }

  findOne(id: string): Promise<Category> {
    return this.prisma.category.findUnique({ where: { id } });
  }

  async update(id: string, dto: UpdateCategoryDto): Promise<Category> {
    return this.prisma.category
      .update({ where: { id }, data: dto })
      .catch(handleErrorConstraintUnique);
  }

  remove(id: string) {
    return this.prisma.category.delete({
      where: { id },
      select: { name: true },
    });
  }
}
