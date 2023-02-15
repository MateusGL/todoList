import { config } from 'dotenv'
import { DataSource } from 'typeorm'
import { getOrmConfig } from './src/modules/database/database.module'

config()

const dbConfig = getOrmConfig()

export default new DataSource(dbConfig)
