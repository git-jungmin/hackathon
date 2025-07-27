// src/user/user.controller.ts
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { UserLocationDto } from './dto/user-location.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('refresh')
  async refreshLocation(@Body() dto: UserLocationDto) {
    const result = await this.userService.saveUserAndLocation(dto);
    const latest = await this.userService.getLatestUserAndLocation();
    return {
      message: result.message,
      latest,
    };
  }
}

// @Controller('user')
// export class UserController {
//   constructor(private readonly locationService: UserService) {}

//   // 위치 저장
//   @Post()
//   save(@Body() dto: UserDto) {
//     return this.locationService.saveUserLocation(dto);
//   }

//   // 위치 조회
//   //   @Get()
//   //   getAll() {
//   //     return this.locationService.getAllLocations();
//   //   }

//   // 최신 위치 조회
//   @Get('latest')
//   getLatest() {
//     const latest = this.locationService.getLatestUserLocation();
//     return latest ? latest : { message: '위치 없음' };
//   }
// }
