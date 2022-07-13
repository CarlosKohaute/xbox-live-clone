import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/users.entity';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar um novo usuário',
  })
  create(@Body() dto: CreateUserDto): Promise<User | void> {
    return this.usersService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Lista todos os usuários',
  })
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Lista usuário por id',
  })
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualizar um usuário',
  })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateUserDto,
  ): Promise<User | void> {
    return this.usersService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deleção de um usuário',
  })
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
