import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Location {
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
}
