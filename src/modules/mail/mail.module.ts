import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MailController } from './controller/mail.controller';
import { Mail, MailSchema } from './schema/mail.schema';
import { MailProcessor } from './service/mail.processor';
import { MailService } from './service/mail.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Mail.name, schema: MailSchema }]),
    BullModule.registerQueue({
      name: 'mail',
      // processors: [join(__dirname, 'processor.js')], //TODO
    }),
  ],
  providers: [MailService, MailProcessor],
  controllers: [MailController],
  exports: [MailService]
})
export class MailModule {}
