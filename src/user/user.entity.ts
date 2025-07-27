// src/user/user.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  CreateDateColumn,
} from 'typeorm';
import { Location } from '../location/location.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('double')
  latitude: number;

  @Column('double')
  longitude: number;

  @Column({ nullable: true })
  address?: string;

  @CreateDateColumn()
  timestamp: Date;

  @OneToOne(() => Location, (location) => location.user)
  location: Location;
}
