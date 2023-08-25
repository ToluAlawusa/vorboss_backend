import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateWidgetDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  manufacturer: string;

  @IsNumber()
  @IsNotEmpty()
  stock_level: number;
}
