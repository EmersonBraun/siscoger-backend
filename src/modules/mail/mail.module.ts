import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MailController } from './controller/mail.controller';
import { Mail, MailSchema } from './schema/mail.schema';
import { MailService } from './service/mail.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Mail.name, schema: MailSchema }])],
  providers: [MailService],
  controllers: [MailController],
  exports: [MailService]
})
export class MailModule {}
