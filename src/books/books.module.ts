import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Books, BooksSchema } from './schema/books.schema';
import { Genres, GenresSchema } from '../genres/schema/genres.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Books.name,
        schema: BooksSchema,
      },
      {
        name: Genres.name,
        schema: GenresSchema,
      },
    ]),
  ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
