import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @IsString()
  synopsis: string;

  @IsNotEmpty()
  @IsNumber()
  @Max(2100)
  @Min(1000)
  published: number;

  @IsNotEmpty()
  genre: string;
}
