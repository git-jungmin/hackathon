import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class LocationRequestDto {
  @ApiProperty({
    description: '타임스탬프',
    example: '2024-07-28T03:25:21.849Z',
  })
  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  timestamp: Date;

  @ApiProperty({
    description: '위도',
    example: 37.5665,
  })
  @IsNumber()
  @IsNotEmpty()
  latitude: number;

  @ApiProperty({
    description: '경도',
    example: 126.978,
  })
  @IsNumber()
  @IsNotEmpty()
  longitude: number;

  @ApiProperty({
    description: '정확도',
    example: 10,
  })
  @IsNumber()
  @IsOptional()
  accuracy?: number;
} 