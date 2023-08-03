import { Body, Controller, Get, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { UserService } from './user.service'
import { UserDTO } from './userDTO'

@ApiTags('User')
@Controller('api/v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): Promise<any> {
    return this.userService.findAll()
  }

  @Post()
  create(@Body() payload: UserDTO): Promise<any> {
    return this.userService.create(payload)
  }
}
