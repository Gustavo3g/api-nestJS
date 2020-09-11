import {MongooseModule} from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TaskService } from './shared/task.service';
import { taskSchema } from './schemas/task.schema'
@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'Task',
            schema: taskSchema
    }])
    ],
    controllers: [TasksController],
    providers: [TaskService],

})
export class TasksModule {}
