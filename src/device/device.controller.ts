import { Controller, Post, Body, Get, Param, NotFoundException } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceRequestDto } from './dto/device-request.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DeviceResponseDto } from './dto/device-response.dto';

@ApiTags('Device')
@Controller('device')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @ApiOperation({
    summary: '디바이스 데이터 생성',
    description: '디바이스 데이터를 생성합니다.',
  })
  @ApiBody({ type: DeviceRequestDto })
  @Post()
  create(@Body() deviceRequestDto: DeviceRequestDto) {
    return this.deviceService.createDeviceData(deviceRequestDto);
  }

  @ApiOperation({
    summary: '디바이스 및 최신 위치 정보 조회',
    description:
      'deviceId를 이용해 디바이스 정보와 가장 최신 위치 정보를 함께 조회합니다.',
  })
  @ApiParam({
    name: 'deviceId',
    required: true,
    description: '디바이스 고유 ID',
    example: 'device-1',
  })
  @ApiResponse({
    status: 200,
    description: '성공',
    type: DeviceResponseDto,
  })
  @ApiResponse({ status: 404, description: '디바이스를 찾을 수 없음' })
  @Get(':deviceId')
  async findOne(
    @Param('id') id: number
) {
    const device = await this.deviceService.getDeviceWithLatestLocation(
      id,
    );
    if (!device) {
      throw new NotFoundException('Device not found');
    }
    return device;
  }

  @ApiOperation({
    summary: '모든 디바이스 및 최신 위치 정보 조회',
    description: '등록된 모든 디바이스와 각 디바이스의 최신 위치 정보를 조회합니다.',
  })
  @ApiResponse({
    status: 200,
    description: '성공',
    type: [DeviceResponseDto],
  })
  @Get()
  async findAll() {
    return this.deviceService.getAllDevices();
    }
}
