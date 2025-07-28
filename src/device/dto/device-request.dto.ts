import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { LocationRequestDto } from 'src/location/dto/location-request.dto';

export class DeviceRequestDto {
  @ApiProperty({
    description: '디바이스 아이디',
    example: 'device-1',
  })
  @IsString()
  @IsNotEmpty()
  deviceId: string;

  @ApiProperty({
    description: '디바이스 역할',
    example: 'device-1',
  })
  @IsString()
  @IsOptional()
  role?: string;

  @ApiProperty({
    description: '위치 정보 배열',
    type: () => [LocationRequestDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LocationRequestDto)
  locations: LocationRequestDto[];
} 