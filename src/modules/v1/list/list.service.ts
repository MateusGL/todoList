import { Injectable } from '@nestjs/common'
import { List } from '../../database/user.entity'
import { ListRepository } from './list.repository'

@Injectable()
export class ListService {
  constructor(private readonly repository: ListRepository) {}

  async find(id): Promise<List[]> {
    return this.repository.find(id)
  }

  async create(payload: List): Promise<List> {
    return this.repository.create(payload)
  }

  async delete(id): Promise<List> {
    return this.repository.delete(id)
  }
}
