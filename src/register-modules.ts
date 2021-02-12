import LoggerModule from './common/logger/logger.module';
import { AdlModule } from './modules/adl/adl.module';
import { AndamentoModule } from './modules/andamento/andamento.module';
import { AndamentocogerModule } from './modules/andamentocoger/andamentocoger.module';
import { ApfdModule } from './modules/apfd/apfd.module';
import { ArquivoModule } from './modules/arquivo/arquivo.module';
import { AuthModule } from './modules/auth/auth.module';
import { CdModule } from './modules/cd/cd.module';
import { CjModule } from './modules/cj/cj.module';
import { ComportamentoModule } from './modules/comportamento/comportamento.module';
import { EnvolvidoModule } from './modules/envolvido/envolvido.module';
import { FalecimentoModule } from './modules/falecimento/falecimento.module';
import { FeriadoModule } from './modules/feriado/feriado.module';
import { GradacaoModule } from './modules/gradacao/gradacao.module';
import { LigacaoModule } from './modules/ligacao/ligacao.module';
import { MailModule } from './modules/mail/mail.module';
import { MotivoconselhoModule } from './modules/motivoconselho/motivoconselho.module';
import { MovimentoModule } from './modules/movimento/movimento.module';
import { OfendidoModule } from './modules/ofendido/ofendido.module';
import { PendenciaModule } from './modules/pendencias/pendencia.module';
import { PermissionModule } from './modules/permission/permission.module';
import { RoleModule } from './modules/role/role.module';
import { SindicanciaModule } from './modules/sindicancia/sindicancia.module';
// import { SobrestamentoModule } from './modules/sobrestamento/sobrestamento.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { UploadModule } from './modules/upload/upload.module';
import { UserModule } from './modules/user/user.module';

export const registerModules = [
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
  LoggerModule,
  MailModule,
  MotivoconselhoModule,
  MovimentoModule,
  OfendidoModule,
  PendenciaModule,
  PermissionModule,
  RoleModule,
  SindicanciaModule,
  // SobrestamentoModule,
  UploadModule,
  AuthModule,
  TasksModule,
  UserModule,
  CdModule,
  CjModule,
];
