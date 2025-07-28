import { ApiProperty } from '@nestjs/swagger';
import { LocationResponseDto } from 'src/location/dto/location-response.dto';

export class DeviceResponseDto {
  @ApiProperty({
    description: '디바이스의 데이터베이스 ID',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: '디바이스 고유 ID',
    example: 'device-1',
  })
  deviceId: string;

  @ApiProperty({
    description: '디바이스 역할',
    example: 'device-1',
  })
  role?: string;

  @ApiProperty({
    description: '생성 일시',
  })
  createdAt: Date;

  @ApiProperty({
    description: '수정 일시',
  })
  updatedAt: Date;

  @ApiProperty({
    description: '가장 최신 위치 정보',
    type: () => LocationResponseDto,
  })
  latestLocation: LocationResponseDto;
} 