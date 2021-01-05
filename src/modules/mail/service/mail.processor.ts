/* eslint-disable @typescript-eslint/no-unused-vars */
import { MailerService } from '@nestjs-modules/mailer';
import {
  OnQueueActive,
  OnQueueCompleted,
  OnQueueError,
  Process,
  Processor,
} from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { DoneCallback, Job } from 'bull';
import { MailService } from './mail.service';

@Processor('mail')
export class MailProcessor {
  private readonly logger = new Logger(MailProcessor.name);

  constructor(
    private sendMailService: MailerService,
    private mailService: MailService,
  ) {}

  @Process('send')
  async handleTranscode(job: Job) {
    try {
      await this.sendMailService.sendMail(job.data);
    } catch (error) {
      this.logger.error(error);
    }
  }

  @OnQueueActive()
  onActive(job: Job) {
    this.logger.debug(`Processing: job ${job.id} of type ${job.name}...`);
  }

  @OnQueueError()
  onError(error: Error) {
    this.logger.error(error);
  }

  @OnQueueCompleted()
  async onComplete(job: Job, result: any) {
    const { processedOn: PO, failedReason, finishedOn: FO } = job;
    const { to, from, subject, template, context } = job.data;
    const processedOn = new Date(PO * 1000);
    const finishedOn = new Date(FO * 1000);
    await this.mailService.save({
      to,
      from,
      subject,
      template,
      context,
      processedOn,
      failedReason,
      finishedOn,
    });

    this.logger.debug(`Finished processes: job ${job.id} of type ${job.name}!`);
  }
}

export default function (job: Job, cb: DoneCallback) {
  console.log(`[${process.pid}] ${JSON.stringify(job.data)}`);
  cb(null, 'It works');
}
