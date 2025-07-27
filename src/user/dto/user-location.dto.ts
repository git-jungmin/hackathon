// src/user/dto/user-location.dto.ts
export class UserLocationDto {
  user: {
    latitude: number;
    longitude: number;
    address?: string;
  };
  location: {
    latitude: number;
    longitude: number;
    address?: string;
  };
}
