/* eslint-disable @typescript-eslint/no-var-requires */
import { MailerOptions } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import * as path from 'path';
require('dotenv').config();

export const mailerConfig: MailerOptions = {
  template: {
    dir: path.resolve(__dirname, '..', '..', '..','templates'),
    adapter: new HandlebarsAdapter(),
    options: {
      extName: '.hbs',
      layoutsDir: path.resolve(__dirname, '..', '..', '..','templates'),
    },
  },
  transport: process.env.MAIL,
};