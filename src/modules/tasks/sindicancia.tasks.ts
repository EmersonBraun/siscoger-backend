/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { changeDate, getCurrentDate } from 'src/common/utils/date.utils';
import { Sindicancia } from 'src/modules/sindicancia/entity/sindicancia.entity';
import { SindicanciaService } from 'src/modules/sindicancia/service/sindicancia.service';
import { FeriadoService } from '../feriado/service/feriado.service';
import { SobrestamentoService } from '../sobrestamento/service/sobrestamento.service';
import { TasksService } from './service/task.service';

@Injectable()
export class SindicanciaTasksService {
  private errors = [];

  constructor(
    private service: SindicanciaService,
    private feriadoService: FeriadoService,
    private sobrestamentoService: SobrestamentoService,
    private dbService: TasksService,
  ) {}

  private readonly logger = new Logger();

  @Cron('0 1 0 * * *', {
    // '0 1 0 * * *'
    name: 'Update Sindicancias Prazos',
  })
  async handleCron(): Promise<void> {
    const start = new Date().toLocaleString();
    const sindicancias = await this.service.findAll();
    sindicancias.map(async (sindicancia: Sindicancia) => {
      await this.verifyPendences(sindicancia);
      await this.updatePrazos(sindicancia);
    });

    await this.saveTask(start);
  }

  async saveTask(start: string): Promise<void> {
    const data = {
      name: 'rotina sindicância',
      start,
      end: new Date().toLocaleString(),
      taskErrors: this.errors,
    };
    await this.dbService.create(data);
  }

  async verifyPendences(sindicancia: Sindicancia): Promise<boolean> {
    return true;
  }

  async updatePrazos(sindicancia: Sindicancia): Promise<void> {
    const {
      cdopm,
      doc_origem_txt,
      id_andamento,
      id_andamentocoger,
      portaria_data,
      portaria_numero,
      sintese_txt,
    } = sindicancia;
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
        prazo_decorrido: await this.getDU(sindicancia),
      });
    } catch (error) {
      this.logger.error(error);
      this.errors.push({ id: sindicancia.id, error });
    }
  }

  async getDUTotais(sindicancia: Sindicancia): Promise<void> {
    const date = changeDate(String(sindicancia.abertura_data), 'fr-ca');
    await this.feriadoService.betweenDates(date);
  }

  async getDU(sindicancia: Sindicancia): Promise<number> {
    const DUTotais = await this.getDUTotais(sindicancia);
    const DUSobrestado = await this.getDUSobrestado(sindicancia);
    return Number(DUTotais) - DUSobrestado;
  }

  async getDUSobrestado(sindicancia: Sindicancia): Promise<number> {
    const date = changeDate(String(sindicancia.abertura_data), 'fr-ca');
    return this.sobrestamentoService.betweenDates(
      date,
      getCurrentDate('fr-ca'),
      { field: 'id_sindicancia', value: sindicancia.id },
    );
  }

  async getMotivo(sindicancia: Sindicancia): Promise<void> {
    const sobrestamento = await this.sobrestamentoService.getMotive({
      field: 'id_sindicancia',
      value: sindicancia.id,
    });

    // Revisar esse bloco

    // if (!sobrestamento) return '';
    // return sobrestamento.motivo
    //   ? sobrestamento.motivo
    //   : sobrestamento.motivo_outros;
  }
}
