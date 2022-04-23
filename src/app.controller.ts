import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

/**
 * AppController description here
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Documentation for getHello() here
   *
   * @returns Hello World!
   */
  @Get()
  public getHello(): string {
    return this.appService.getHello()
  }
}
