import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Any } from 'typeorm';

@Schema({ timestamps: true })
export class Tasks {
  @Prop() name: string;

  @Prop() start: string;

  @Prop() end: string;

  @Prop([Any]) taskErrors: any[];
}
export type TasksDocument = Tasks & Document;
export const TasksSchema = SchemaFactory.createForClass(Tasks);
