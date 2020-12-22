import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class UpdateDatabaseService {
  private readonly logger = new Logger();

  @Cron('* * * * * *', { //'0 1 0 * * *'
    name: 'Update Sindicancias Prazos',
  })
  handleCron() {
    console.log('here')
    this.logger.debug('Called when the second is 45');
  }
}