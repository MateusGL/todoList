import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { List } from '../../database/user.entity'

@Injectable()
export class ListRepository {
  constructor(
    @InjectRepository(List)
    private readonly repo: Repository<List>,
  ) {}

  async find(id: number): Promise<List[]> {
    return await this.repo.find({ where: { user: { id } } })
  }

  async create(list: List): Promise<List> {
    return await this.repo.save(list)
  }

  async delete(id: number): Promise<any> {
    console.log(id)
    return await this.repo.delete({ id })
  }
}
