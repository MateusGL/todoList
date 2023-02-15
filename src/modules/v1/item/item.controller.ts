import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Item } from '../../database/user.entity'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { ItemService } from './item.service'

@ApiTags('Item')
@Controller('api/v1/item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get('')
  find(@Param('id') id: string): Promise<Item[]> {
    return this.itemService.find(id)
  }

  @Post('')
  create(@Body() payload: Item): Promise<Item> {
    return this.itemService.create(payload)
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id/')
  delete(@Param('id') id: string): Promise<any> {
    return this.itemService.delete(id)
  }
}
