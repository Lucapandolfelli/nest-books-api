import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGenreDto } from './dto/create-genre.dto';
import { Genres, GenresDocument } from './schema/genres.schema';

@Injectable()
export class GenresService {
  constructor(
    @InjectModel(Genres.name) private genresModules: Model<GenresDocument>,
  ) {}

  async createGenre(createGenreDto: CreateGenreDto) {
    return await new this.genresModules(createGenreDto).save();
  }

  async getAllGenres() {
    return await this.genresModules.find({});
  }

  async getGenreByName(name: string) {
    return await this.genresModules.findOne({ name });
  }

  async deleteBookOfGenreById(genre_id: string, book_id: string) {
    return await this.genresModules.deleteOne(
      {
        _id: genre_id,
      },
      {
        books: { _id: book_id },
      },
    );
  }
}
