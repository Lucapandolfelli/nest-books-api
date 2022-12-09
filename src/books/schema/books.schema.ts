/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BooksDocument = Books & Document;

@Schema({ timestamps: true})
export class Books {
  @Prop({ type: String })
  title!: string;

  @Prop({ type: String })
  author!: string;

  @Prop({ type: String })
  synopsis!: string;

  @Prop({ type: Number})
  published!: number;

  @Prop({ type: String })
  genre!: string;
}

export const BooksSchema = SchemaFactory.createForClass(Books);
