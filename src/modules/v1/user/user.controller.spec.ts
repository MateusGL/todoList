import { Test, TestingModule } from '@nestjs/testing'
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { User } from '../../database/user.entity'
import { UserRepository } from './user.repository'
import { UserDTO } from './userDTO'

describe('UserController', () => {
  let controller: UserController
  let userService: UserService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        UserRepository,
        {
          provide: UserRepository,
          useValue: {
            find: jest.fn(),
            create: jest.fn(),
            findOne: jest.fn(),
          },
        },
      ],
    }).compile()

    controller = module.get<UserController>(UserController)
    userService = module.get<UserService>(UserService)
  })

  describe('findAll', () => {
    it('should return an array of users', async () => {
      // Mock the return value of the userService.findAll() method
      const users: User[] = [
        {
          id: 1,
          name: 'John',
          email: 'John@email.com',
          login: 'John',
          password: '123',
          list: [],
        },
      ]
      jest.spyOn(userService, 'findAll').mockResolvedValue(users)

      const result = await controller.findAll()

      expect(result).toBe(users)
    })
  })

  describe('create', () => {
    it('should create a new user', async () => {
      const newUser: UserDTO = {
        name: 'new User',
        login: 'newUser',
        email: 'new User@email.com',
        password: '123',
      }

      const createdUser: User = {
        id: 3,
        name: 'new User',
        email: 'newUser@email.com',
        login: 'newUser',
        password: '123',
        list: [],
      }
      jest.spyOn(userService, 'create').mockResolvedValue(createdUser)

      const result = await controller.create(newUser)

      expect(result).toBe(createdUser)
    })
  })
})
