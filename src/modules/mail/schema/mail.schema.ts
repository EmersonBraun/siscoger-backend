import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Any } from 'typeorm';

export type MailDocument = Mail & Document; 

@Schema({timestamps: true})
export class Mail {
  @Prop() to: string
  @Prop() from: string
  @Prop() subject: string
  @Prop() template: string
  @Prop([Any]) context: any[]
  @Prop([Any]) processedOn: any
  @Prop([Any]) finishedOn: any
  @Prop([Any]) failedReason: any

}
export const MailSchema = SchemaFactory.createForClass(Mail)