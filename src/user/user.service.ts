import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { Todo } from '../todo/schemas/todo.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Todo.name) private todoModel: Model<Todo>,
  ) {}

  async createUser() {
    const newTodo = new this.todoModel({
      title: 'Title',
    });

    await newTodo.save();
    const newUser = new this.userModel({
      username: 'admiffdffddn',
      displayName: 'admin',
      todo: newTodo._id,
    });

    return await newUser.save();
  }

  async getAllUsers() {
    const user = await this.userModel.find().populate('todo');
    return user;
  }

  async getOneUser(id: string) {
    const user = await this.userModel.findOne({ _id: id }).populate('todo').populate('events');

    if (!user) {
      return null;
    }
    return user;
  }
}
