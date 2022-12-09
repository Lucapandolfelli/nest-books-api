/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, HttpCode, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('api/books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @HttpCode(201)
  async createBook(@Body() createBookDto: CreateBookDto) {
    return await this.booksService.createBook(createBookDto);
  }

  @Get()
  async getAllBooks() {
    return await this.booksService.getAllBooks();
  }

  @Get(':id')
  async getBookById(@Param('id') id: string) {
    return await this.booksService.getBookById(id);
  }
  
  @Delete(':id')
  async deleteBookById(@Param('id') id: string) {
    return await this.booksService.deleteBookById(id);
  }
}
