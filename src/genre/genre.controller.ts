import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Genre } from './entities/genre.entity';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Gêneros')
@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Post()
  @ApiOperation({
    summary: 'Cadastrar um novo gênero',
  })
  create(@Body() Dto: CreateGenreDto): Promise<Genre> {
    return this.genreService.create(Dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todos os gêneros',
  })
  findAll(): Promise<Genre[]> {
    return this.genreService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Listar um gênero por ID',
  })
  findOne(@Param('id') id: string): Promise<Genre> {
    return this.genreService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualizar dados de um gênero',
  })
  update(@Param('id') id: string, @Body() Dto: UpdateGenreDto): Promise<Genre> {
    return this.genreService.update(id, Dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deletar um gênero',
  })
  remove(@Param('id') id: string) {
    return this.genreService.remove(id);
  }
}
