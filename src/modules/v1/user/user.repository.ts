import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from '../../database/user.entity'

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
  ) {}

  async find(): Promise<User[]> {
    return await this.repo.find({
      relations: ['list', 'list.item', 'list.item.children'],
    })
  }

  async create(user: User): Promise<User> {
    return await this.repo.save(user)
  }

  async findOne(where: { user?: string }): Promise<User> {
    return await this.repo.findOneBy({ login: where.user })
  }
}
