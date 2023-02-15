import { ApiParam, ApiProperty } from '@nestjs/swagger'
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 500, nullable: false })
  name: string

  @Column({ length: 500, nullable: false })
  email: string

  @Column({ length: 500, nullable: false })
  login: string

  @Column({ length: 500, nullable: false })
  password: string

  @OneToMany(() => List, (List) => List.user)
  @JoinColumn()
  list: List[]
}

@Entity()
export class List extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 500 })
  title: string

  @ManyToOne(() => User, (user) => user.id, { nullable: false, cascade: true })
  user: User

  @OneToMany(() => Item, (Item) => Item.listId, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  item: Item[]

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date
}

enum listType {
  children = 'children',
  father = 'father',
}

@Entity()
export class Item extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty()
  @Column({ length: 500 })
  name: string

  @ApiProperty()
  @Column({ length: 500 })
  description: string

  @ApiProperty({ enum: listType, default: listType.father })
  @Column({
    nullable: false,
    type: 'enum',
    enum: listType,
    default: listType.father,
  })
  type: listType

  @ApiProperty({ type: Number })
  @ManyToOne(() => List, (list) => list.item, {
    onDelete: 'CASCADE',
  })
  listId: List

  @ApiProperty()
  @ManyToOne(() => Item, (item) => item.children, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  parent: Item

  @ApiProperty()
  @OneToMany(() => Item, (item) => item.parent, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  children: Item[]

  @ApiProperty({ type: Number })
  @ManyToOne(() => User, { cascade: true, nullable: false })
  @JoinColumn()
  user: User

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date
}
