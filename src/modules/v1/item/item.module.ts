import { Module } from '@nestjs/common'
import { DatabaseModule } from '../../database/database.module'
import { Item } from '../../database/user.entity'
import { ItemController } from './item.controller'
import { ItemService } from './item.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ItemRepository } from './item.repository'

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Item])],
  controllers: [ItemController],
  providers: [ItemRepository, ItemService],
})
export class ItemModule {}
