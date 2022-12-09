/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Delete} from '@nestjs/common';
import { GenresService } from './genres.service';
import { CreateGenreDto } from './dto/create-genre.dto';

@Controller('api/genres')
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  @Post()
  async createGenre(@Body() createGenreDto: CreateGenreDto) {
    return await this.genresService.createGenre(createGenreDto);
  }

  @Get()
  async getAllGenres() {
    return await this.genresService.getAllGenres();
  }

  @Get(':name')
  async getGenreByName(@Param('name') name: string) {
    return await this.genresService.getGenreByName(name);
  }

  @Delete(':genre_id/book/:book_id')
  async deleteBookOfGenreById(@Param('genre_id') genre_id: string, @Param('book_id') book_id: string){
    return await this.genresService.deleteBookOfGenreById(genre_id, book_id);
  }
}
