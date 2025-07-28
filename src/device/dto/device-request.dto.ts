import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { LocationRequestDto } from 'src/location/dto/location-request.dto';

export class DeviceRequestDto {
  @IsString()
  @IsNotEmpty()
  deviceId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LocationRequestDto)
  locations: LocationRequestDto[];
} 