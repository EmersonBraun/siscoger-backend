import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Any } from 'typeorm';

@Schema({ timestamps: true })
export class Log {
  @Prop() module: string;

  @Prop() action: string;

  @Prop([Any]) user: any;

  @Prop([Any]) data: any;

  @Prop([Any]) old: any;

  @Prop([Any]) changes: any;
}
export type LogDocument = Log & Document;
export const LogSchema = SchemaFactory.createForClass(Log);
