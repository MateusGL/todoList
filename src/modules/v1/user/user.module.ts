import { Module } from '@nestjs/common'
import { DatabaseModule } from '../../database/database.module'
import { User } from '../../database/user.entity'
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserRepository } from './user.repository'

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
