import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleErrorConstraintUnique } from 'src/utils/handle-erros-unique.util';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Genre } from './entities/genre.entity';

@Injectable()
export class GenreService {
  constructor(private readonly prisma: PrismaService) {}
  async create(dto: CreateGenreDto): Promise<Genre> {
    return this.prisma.genre
      .create({ data: dto })
      .catch(handleErrorConstraintUnique);
  }

  findAll(): Promise<Genre[]> {
    return this.prisma.genre.findMany();
  }

  async verifyIdAndReturnGenre(id: string): Promise<Genre> {
    const genre: Genre = await this.prisma.genre.findUnique({
      where: { id },
    });

    if (!genre) {
      throw new NotFoundException(`Entrada de id '${id}' não encontrada`);
    }

    return genre;
  }

  findOne(id: string): Promise<Genre> {
    return this.verifyIdAndReturnGenre(id);
  }

  async update(id: string, dto: UpdateGenreDto): Promise<Genre> {
    await this.verifyIdAndReturnGenre(id);
    return this.prisma.genre
      .update({ where: { id }, data: dto })
      .catch(handleErrorConstraintUnique);
  }

  async remove(id: string) {
    await this.verifyIdAndReturnGenre(id);
    return this.prisma.genre.delete({ where: { id } });
  }
}
