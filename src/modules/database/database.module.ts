import { DynamicModule } from '@nestjs/common'
import * as path from 'path'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DataSourceOptions } from 'typeorm'
//import { ConfigService } from '@nestjs/config'

export function getOrmConfig(): DataSourceOptions {
  return {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'teste',
    database: 'teste',
    synchronize: false,
    logging: false,
    entities: [path.join(__dirname, '../**/{*.entity.ts,*.entity.js}')],
    migrations: [path.join(__dirname, '../database/migrations/**/{*.ts,*.js}')],
  }
}

export class DatabaseModule {
  static orm(): DynamicModule {
    const ormConfig: DataSourceOptions = getOrmConfig()

    return {
      module: DatabaseModule,
      imports: [TypeOrmModule.forRoot(ormConfig)],
      exports: [DatabaseModule],
    }
  }
}
