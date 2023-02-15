import { Module } from '@nestjs/common'
import { DatabaseModule } from '../../database/database.module'
import { List } from '../../database/user.entity'
import { ListController } from './list.controller'
import { ListService } from './list.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ListRepository } from './list.repository'

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([List])],
  controllers: [ListController],
  providers: [ListRepository, ListService],
})
export class ListModule {}
