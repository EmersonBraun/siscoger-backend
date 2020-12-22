/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { Sindicancia } from 'src/modules/sindicancia/entity/sindicancia.entity';
import { SindicanciaService } from 'src/modules/sindicancia/service/sindicancia.service';

@Injectable()
export class SindicanciaTasksService {
  private errors = []
  constructor(private service: SindicanciaService){}

  private readonly logger = new Logger();

  @Cron('1 * * * * *', { //'0 1 0 * * *'
    name: 'Update Sindicancias Prazos',
  })
  async handleCron() {
    const sindicancias = await this.service.findAll()
    sindicancias.map(async (sindicancia: Sindicancia) => {
      await this.verifyPendences(sindicancia)
      await this.updatePrazos(sindicancia)
    })
    
    if (this.errors.length) {
      console.log(this.errors)
    }
  }

  async verifyPendences (sindicancia: Sindicancia) {
    return true
  }

  async updatePrazos (sindicancia: Sindicancia) {
    const { cdopm, doc_origem_txt, id_andamento, id_andamentocoger, portaria_data, portaria_numero, sintese_txt } = sindicancia
      try {  
        this.service.update(String(sindicancia.id), {
          cdopm,
          doc_origem_txt,
          id_andamento,
          id_andamentocoger,
          portaria_data,
          portaria_numero,
          sintese_txt,
          diasuteis_sobrestado: await this.getDUSobrestado(sindicancia),
          motivo_sobrestado: await this.getMotivo(sindicancia),
          prazo_decorrido: await this.getDUTotais(sindicancia)
        })
      } catch (error) {
        this.logger.error(error)
        this.errors.push({ id: sindicancia.id, error })
      }
  }

  async getDUTotais (sindicancia: Sindicancia) {
    // DIASUTEIS(abertura_data,DATE(NOW())) AS dutotal
    return 0
  }

  async getDU (sindicancia: Sindicancia) {
    // (DIASUTEIS(abertura_data,DATE(NOW()))-IFNULL(b.dusobrestado,0)) AS diasuteis
    return 0
  }

  async getDUSobrestado (sindicancia: Sindicancia) {
    // (SELECT id_sindicancia, SUM(DIASUTEIS(inicio_data, termino_data)+1) AS dusobrestado fROM sobrestamento WHERE termino_data !='0000-00-00' AND id_sindicancia!=''  GROUP BY id_sindicancia)
    return 0
  }

  async getMotivo (sindicancia: Sindicancia) {
    /**
     * (
      SELECT  motivo
      FROM    sobrestamento
      WHERE   sobrestamento.id_sindicancia=sindicancia.id_sindicancia 
      ORDER BY sobrestamento.id_sobrestamento DESC
      LIMIT 1
    ) AS motivo,  
    (
      SELECT  motivo_outros
      FROM    sobrestamento
      WHERE   sobrestamento.id_sindicancia=sindicancia.id_sindicancia 
      ORDER BY sobrestamento.id_sobrestamento DESC
      LIMIT 1
    ) AS motivo_outros,
     */
    return ''
  }

}