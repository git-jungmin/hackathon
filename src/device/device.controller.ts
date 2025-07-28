import { Controller, Post, Body } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceRequestDto } from './dto/device-request.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

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
}
