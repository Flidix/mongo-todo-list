import { Controller, Param, Post } from '@nestjs/common';
import { EventService } from './post.service';

@Controller('post')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post(':id')
  createPost(@Param('id') id: string) {
    return this.eventService.createPost(id);
  }
}
