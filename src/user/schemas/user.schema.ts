import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Todo } from '../../todo/schemas/todo.schema';
import { Post } from 'src/event/schemas/post.schema';

@Schema()
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: false })
  displayName?: string;

  @Prop({ required: false })
  avatarUrl?: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Todo' })
  todo?: Todo;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }] })
  events?: Post[];
}

export const UserSchema = SchemaFactory.createForClass(User);
