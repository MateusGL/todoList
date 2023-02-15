import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DatabaseModule } from './modules/database/database.module'
import { ItemModule } from './modules/v1/item/item.module'
import { ListModule } from './modules/v1/list/list.module'
import { UserModule } from './modules/v1/user/user.module'
import { AuthModule } from './modules/v1/auth/auth.module'

@Module({
  imports: [
    UserModule,
    ListModule,
    ItemModule,
    DatabaseModule.orm(),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
