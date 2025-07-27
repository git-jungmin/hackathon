// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { Location } from '../location/location.entity';
import { UserLocationDto } from './dto/user-location.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ) {}

  async saveUserAndLocation(dto: UserLocationDto) {
    const savedUser = await this.userRepository.save({
      ...dto.user,
    });

    const savedLocation = await this.locationRepository.save({
      ...dto.location,
      user: savedUser, // 1:1 관계 연결
    });

    return {
      message: '보호자 및 노약자 위치 저장 완료',
      user: savedUser,
      location: savedLocation,
    };
  }

  async getLatestUserAndLocation() {
    const users = await this.userRepository.find({
      order: { timestamp: 'DESC' },
      take: 1,
    });

    const user = users[0];
    if (!user) {
      return { message: '보호자 위치 정보 없음' };
    }

    const locations = await this.locationRepository.find({
      where: { user: { id: user.id } },
      order: { timestamp: 'DESC' },
      take: 1,
      relations: ['user'],
    });

    const location = locations[0];

    return {
      user,
      location: location || { message: '노약자 위치 정보 없음' },
    };
  }
}
