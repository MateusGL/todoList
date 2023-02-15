import { Test, TestingModule } from '@nestjs/testing'
import { ListController as ListController } from './list.controller'
import { ListService } from './list.service'

describe('ListController', () => {
  let listController: ListController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ListController],
      providers: [ListService],
    }).compile()

    listController = app.get<ListController>(ListController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(listController.find('')).toBe('Hello World!')
    })
  })
})
