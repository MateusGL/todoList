import { Injectable, Inject } from '@nestjs/common'

import { User } from '../../database/user.entity'
import { UserRepository } from './user.repository'

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find()
  }

  async create(user): Promise<User> {
    return this.userRepository.create(user)
  }

  async findOne(user): Promise<User> {
    return this.userRepository.findOne(user)
  }
}
