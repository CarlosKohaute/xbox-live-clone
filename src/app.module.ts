import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { GenreModule } from './genre/genre.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [UsersModule, ProductsModule, GenreModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
