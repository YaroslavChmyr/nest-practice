import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    // Logic to list messages
  }

  @Post()
  createMessage() {
    // Logic to create a message
  }

  @Get(':id')
  getMessage() {
    // Logic to get a specific message
  }
}
