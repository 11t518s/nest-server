import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse } from '@nestjs/swagger';
import { UserDto } from './DTOs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOkResponse({ type: UserDto })
  async getHello(): Promise<UserDto> {
    return {
      id: 'aaa',
      name: 'bong',
    };
  }
}
