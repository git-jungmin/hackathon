import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';

export class LocationRequestDto {
  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  timestamp: Date;

  @IsNumber()
  @IsNotEmpty()
  latitude: number;

  @IsNumber()
  @IsNotEmpty()
  longitude: number;

  @IsNumber()
  @IsNotEmpty()
  accuracy: number;
} 