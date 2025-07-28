import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Device } from './entities/device.entity';
import { Repository } from 'typeorm';
import { Location } from 'src/location/entities/location.entity';
import { DeviceRequestDto } from './dto/device-request.dto';

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
}
