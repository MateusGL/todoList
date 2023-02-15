import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  Delete,
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { List } from '../../database/user.entity'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { ListService } from './list.service'

@ApiTags('List')
@Controller('api/v1/list')
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Get('')
  find(@Param('id') id: string): Promise<List[]> {
    return this.listService.find(id)
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() payload: List): Promise<List> {
    return this.listService.create(payload)
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id/')
  delete(@Param('id') id: string): Promise<List> {
    console.log(id)
    return this.listService.delete(id)
  }
}
