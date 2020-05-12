import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('links')
class Link {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  url: string;
}

export default Link;
