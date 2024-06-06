import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../user/schemas/user.schema';
import { Post } from './schemas/post.schema';

@Injectable()
export class EventService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Post.name) private postModel: Model<Post>,
  ) {}

  async createPost(userId: string) {
    const newPost = await new this.postModel({
      title: 'Title',
      user: userId,
    }).save();

    const user = await this.userModel.findOne({ _id: userId });

    await user?.updateOne({
      $push: { events: newPost._id },
    });

    return newPost;
  }
}
