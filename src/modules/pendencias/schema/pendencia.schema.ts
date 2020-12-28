import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PendenciaDocument = Pendencia & Document; 

@Schema({timestamps: true})
export class Pendencia {
  @Prop() cdopm: string
  @Prop() id_proc: number
  @Prop() sjd_ref: number
  @Prop() sjd_ref_ano: number
  @Prop() proc: string
  @Prop([String]) pendencias: string[]

}
export const PendenciaSchema = SchemaFactory.createForClass(Pendencia)