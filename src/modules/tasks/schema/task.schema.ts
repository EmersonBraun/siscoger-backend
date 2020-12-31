import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Any } from 'typeorm';

export type TasksDocument = Tasks & Document; 

@Schema({timestamps: true})
export class Tasks {
  @Prop() name: string
  @Prop() start: string
  @Prop() end: string
  @Prop([Any]) taskErrors: any[]

}
export const TasksSchema = SchemaFactory.createForClass(Tasks)