import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { SindicanciaService } from 'src/modules/sindicancia/service/sindicancia.service'

@Injectable()
export class RefYearPipe implements PipeTransform {
  constructor(
    private service: SindicanciaService
  ) {}
  // constructor(private type: string){}
  async transform(value: any, metadata: ArgumentMetadata) {
    console.log(metadata)
    value.sjd_ref_year = this.service.getNextRefYear(value)
    value.sjd_ref = await this.service.getNextRef(value)
    return value;
  }
}