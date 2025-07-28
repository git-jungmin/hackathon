import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Device } from 'src/device/entities/device.entity';

@Entity('locations')
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  timestamp: Date;

  @Column('float')
  latitude: number;

  @Column('float')
  longitude: number;

  @Column('float')
  accuracy: number;

  @ManyToOne(() => Device, (device) => device.locations)
  device: Device;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
