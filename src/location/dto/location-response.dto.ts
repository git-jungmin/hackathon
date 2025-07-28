import { ApiProperty } from '@nestjs/swagger';

export class LocationResponseDto {
  @ApiProperty({
    description: '타임스탬프',
    example: '2024-07-28T03:25:21.849Z',
  })
  timestamp: Date;

  @ApiProperty({
    description: '위도',
    example: 37.5665,
  })
  latitude: number;

  @ApiProperty({
    description: '경도',
    example: 126.978,
  })
  longitude: number;

  @ApiProperty({
    description: '정확도',
    example: 10,
  })
  accuracy: number;
} 