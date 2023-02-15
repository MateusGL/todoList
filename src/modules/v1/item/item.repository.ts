import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Item } from '../../database/user.entity'

@Injectable()
export class ItemRepository {
  constructor(
    @InjectRepository(Item)
    private readonly repo: Repository<Item>,
  ) {}

  async find(id: number): Promise<Item[]> {
    return await this.repo.findBy({ id })
  }

  async create(item: Item): Promise<Item> {
    return await this.repo.save(item)
  }

  async delete(id: number): Promise<any> {
    return await this.repo.delete({ id })
  }
}
