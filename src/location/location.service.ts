// src/location/location.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from './location.entity';
import { Repository } from 'typeorm';
import { LocationDto } from './dto/location.dto';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ) {}

  async saveLocation(dto: LocationDto) {
    const location = this.locationRepository.create(dto);
    const saved = await this.locationRepository.save(location);
    return { message: '위치 저장 완료', data: saved };
  }

  async getLatestLocation() {
    return this.locationRepository.findOne({
      order: { timestamp: 'DESC' },
    });
  }

  // 전체 위치 조회 (필요 시)
  // async getAllLocations() {
  //   return this.locationRepository.find({ order: { timestamp: 'DESC' } });
  // }
}
