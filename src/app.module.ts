import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { typeOrmOptions } from '../src/config';
import { AppLoggerMiddleware } from './common/logger/middleware';
import { AdlModule } from './modules/adl/adl.module';
import { AndamentoModule } from './modules/andamento/andamento.module';
import { AndamentocogerModule } from './modules/andamentocoger/andamentocoger.module';
import { ApfdModule } from './modules/apfd/apfd.module';
import { ArquivoModule } from './modules/arquivo/arquivo.module';
import { AuthModule } from './modules/auth/auth.module';
import { ComportamentoModule } from './modules/comportamento/comportamento.module';
import { EnvolvidoModule } from './modules/envolvido/envolvido.module';
import { FalecimentoModule } from './modules/falecimento/falecimento.module';
import { FeriadoModule } from './modules/feriado/feriado.module';
import { GradacaoModule } from './modules/gradacao/gradacao.module';
import { LigacaoModule } from './modules/ligacao/ligacao.module';
import { MovimentoModule } from './modules/movimento/movimento.module';
import { OfendidoModule } from './modules/ofendido/ofendido.module';
import { SindicanciaModule } from './modules/sindicancia/sindicancia.module';
import { SobrestamentoModule } from './modules/sobrestamento/sobrestamento.module';
import { UploadModule } from './modules/upload/upload.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
    }),
    TypeOrmModule.forRoot(typeOrmOptions),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION),
    AdlModule,
    ApfdModule,
    AndamentoModule,
    AndamentocogerModule,
    ArquivoModule,
    ComportamentoModule,
    EnvolvidoModule,
    FalecimentoModule,
    FeriadoModule,
    GradacaoModule,
    LigacaoModule,
    MovimentoModule,
    OfendidoModule,
    SindicanciaModule,
    SobrestamentoModule,
    UploadModule,
    AuthModule,
    UserModule,
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}

