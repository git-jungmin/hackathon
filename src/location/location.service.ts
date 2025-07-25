// src/location/location.service.ts
import { Injectable } from '@nestjs/common';
import { LocationDto } from './dto/location.dto';

@Injectable()
export class LocationService {
  private locations: LocationDto[] = [];

  saveLocation(dto: LocationDto) {
    const saved = {
      ...dto,
      timestamp: dto.timestamp || new Date().toISOString(),
    };
    this.locations.push(saved);
    return { message: '위치 저장 완료', data: saved };
  }

  //   getAllLocations() {
  //     return this.locations;
  //   }

  getLatestLocation() {
    return this.locations.length > 0
      ? this.locations[this.locations.length - 1]
      : null;
  }
}
