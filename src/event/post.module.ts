import { Module } from '@nestjs/common';
import { EventService } from './post.service';
import { EventController } from './post.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../user/schemas/user.schema';
import { PostSchema, Post } from './schemas/post.schema';

@Module({
  controllers: [EventController],
  providers: [EventService],
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: Post.name,
        schema: PostSchema,
      },
    ]),
  ],
})
export class EventModule {}
