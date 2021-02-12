import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Any } from 'typeorm';

@Schema({ timestamps: true })
export class Mail {
  @Prop() to: string;

  @Prop() from: string;

  @Prop() subject: string;

  @Prop() template: string;

  @Prop([Any]) context: any[];

  @Prop([Any]) processedOn: any;

  @Prop([Any]) finishedOn: any;

  @Prop([Any]) failedReason: any;
}
export type MailDocument = Mail & Document;
export const MailSchema = SchemaFactory.createForClass(Mail);
