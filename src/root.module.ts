import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Environment } from '@shared/variables/environment';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';
import { EventModule } from './event/post.module';

@Module({
  imports: [MongooseModule.forRoot(Environment.MONGODB_URL), UserModule, TodoModule, EventModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class RootModule {}
