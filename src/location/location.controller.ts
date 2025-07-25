// src/location/location.controller.ts
import { Body, Controller, Get, Post } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationDto } from './dto/location.dto';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  // 위치 저장
  @Post()
  save(@Body() dto: LocationDto) {
    return this.locationService.saveLocation(dto);
  }
  // 위치 조회
  //   @Get()
  //   getAll() {
  //     return this.locationService.getAllLocations();
  //   }

  // 최신 위치 조회
  @Get('latest')
  getLatest() {
    const latest = this.locationService.getLatestLocation();
    return latest ? latest : { message: '위치 없음' };
  }
}
