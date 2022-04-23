import { Injectable } from '@nestjs/common'

/**
 * AppService comment here
 */
@Injectable()
export class AppService {
  /**
   * Documentation for getHello() here
   *
   * @returns Hello World!
   */
  public getHello(): string {
    return 'Hello World!'
  }
}
