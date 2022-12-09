import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBookDto } from './dto/create-book.dto';
import { Books, BooksDocument } from './schema/books.schema';
import { Genres, GenresDocument } from '../genres/schema/genres.schema';
import { Model } from 'mongoose';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Books.name) private booksModules: Model<BooksDocument>,
    @InjectModel(Genres.name) private genresModules: Model<GenresDocument>,
  ) {}

  async createBook(createBookDto: CreateBookDto) {
    const genre = await this.genresModules.findOne({
      name: createBookDto.genre,
    });
    if (genre) {
      const createdBook = await new this.booksModules(createBookDto).save();
      await this.genresModules.findByIdAndUpdate(
        { _id: genre._id },
        { $push: { books: createdBook } },
      );
      return createdBook;
    }
  }

  async getAllBooks(): Promise<Books[]> {
    return await this.booksModules.find({});
  }

  async getBookById(id: string) {
    return await this.booksModules.findOne({ _id: id });
  }

  async deleteBookById(id: string) {
    return await this.booksModules.deleteOne({ _id: id });
  }
}
