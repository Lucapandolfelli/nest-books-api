/* eslint-disable prettier/prettier */
import { Book } from "src/books/interface/book.interface";

export interface Genre {
  name: string;
  books: Book[];
}