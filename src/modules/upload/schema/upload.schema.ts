import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UploadDocument = Upload & Document; 

@Schema({timestamps: true})
export class Upload {
  @Prop()
  campo: string
  @Prop()
  rg: string
  @Prop()
  id_proc: number
  @Prop()
  proc: string
  @Prop()
  obs: string
  @Prop()
  is_old_file: boolean
  @Prop()
  data_arquivo: string

  @Prop()
  name: string
  @Prop()
  mime: string
  @Prop()
  path: string
  @Prop()
  size: string

}
export const UploadSchema = SchemaFactory.createForClass(Upload)