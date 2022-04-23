import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

/**
 * Documentation for AppModule here
 */
@Module({
  controllers: [AppController],
  imports: [],
  providers: [AppService]
})
export class AppModule {}
