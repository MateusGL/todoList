import { Injectable } from '@nestjs/common'
import { Item } from '../../database/user.entity'
import { ItemRepository } from './item.repository'

@Injectable()
export class ItemService {
  constructor(private readonly repository: ItemRepository) {}

  async find(id): Promise<Item[]> {
    return this.repository.find(id)
  }

  async create(payload: Item): Promise<Item> {
    return this.repository.create(payload)
  }

  async delete(id): Promise<any> {
    return this.repository.delete(id)
  }
}
