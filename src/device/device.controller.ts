import { Controller, Post, Body } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceRequestDto } from './dto/device-request.dto';

@Controller('device')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @Post()
  create(@Body() deviceRequestDto: DeviceRequestDto) {
    return this.deviceService.createDeviceData(deviceRequestDto);
  }
}
