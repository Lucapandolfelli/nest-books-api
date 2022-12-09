/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Books, BooksSchema } from '../../books/schema/books.schema';

export type GenresDocument = Genres & Document;

@Schema()
export class Genres {
  @Prop({ type: String })
  name!: string;

  @Prop({ type: [BooksSchema] })
  books: Books[];
}

export const GenresSchema = SchemaFactory.createForClass(Genres);