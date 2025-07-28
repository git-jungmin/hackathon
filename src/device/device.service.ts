import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Device } from './entities/device.entity';
import { Repository } from 'typeorm';
import { Location } from 'src/location/entities/location.entity';
import { DeviceRequestDto } from './dto/device-request.dto';
import { DeviceResponseDto } from './dto/device-response.dto';
import { plainToClass } from 'class-transformer';
import { LocationResponseDto } from 'src/location/dto/location-response.dto';

@Injectable()
export class DeviceService {
  constructor(
    @InjectRepository(Device)
    private readonly deviceRepository: Repository<Device>,
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
  ) {}

  async createDeviceData(deviceRequestDto: DeviceRequestDto) {
    let device = await this.deviceRepository.findOne({
      where: { deviceId: deviceRequestDto.deviceId },
    });

    if (!device) {
      device = this.deviceRepository.create({
        deviceId: deviceRequestDto.deviceId,
        role: deviceRequestDto.role,
      });
      await this.deviceRepository.save(device);
    }

    const locations = deviceRequestDto.locations.map((locationDto) => {
      const location = new Location();
      location.timestamp = locationDto.timestamp;
      location.latitude = locationDto.latitude;
      location.longitude = locationDto.longitude;
      location.accuracy = locationDto.accuracy;
      location.device = device;
      return location;
    });

    await this.locationRepository.save(locations);

    return device;
  }

  async getDeviceWithLatestLocation(
    id: number,
  ): Promise<DeviceResponseDto> {
    const device = await this.deviceRepository.findOne({
      where: { id: id },
    });

    if (!device) {
      return null;
    }

    const latestLocation = await this.locationRepository
      .createQueryBuilder('location')
      .where('location.deviceId = :id', { id: device.id })
      .orderBy('location.timestamp', 'DESC')
      .getOne();

    const response = plainToClass(DeviceResponseDto, device);
    if (latestLocation) {
      response.latestLocation = plainToClass(
        LocationResponseDto,
        latestLocation,
      );
    }

    return response;
  }

  async getAllDevices() {
    const devices = await this.deviceRepository.find();
    return devices;
  }
}
