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
import { DecorrenciaConselhoModule } from './modules/decorrenciaconselho/decorrenciaconselho.module';
import { DenunciaCivilModule } from './modules/denunciacivil/denunciacivil.module';
import { DesercaoModule } from './modules/desercao/desercao.module';
import { EnvolvidoModule } from './modules/envolvido/envolvido.module';
import { ExclusaoJudicialModule } from './modules/exclusaojudicial/exclusaojudicial.module';
import { FalecimentoModule } from './modules/falecimento/falecimento.module';
import { FatdModule } from './modules/fatd/fatd.module';
import { FeriadoModule } from './modules/feriado/feriado.module';
import { GradacaoModule } from './modules/gradacao/gradacao.module';
import { IpmModule } from './modules/ipm/ipm.module';
import { IsoModule } from './modules/iso/iso.module';
import { LigacaoModule } from './modules/ligacao/ligacao.module';
import { MailModule } from './modules/mail/mail.module';
import { MotivoconselhoModule } from './modules/motivoconselho/motivoconselho.module';
import { MovimentoModule } from './modules/movimento/movimento.module';
import { OfendidoModule } from './modules/ofendido/ofendido.module';
import { PadModule } from './modules/pad/pad.module';
import { PendenciaModule } from './modules/pendencias/pendencia.module';
import { PermissionModule } from './modules/permission/permission.module';
import { PjModule } from './modules/pj/pj.module';
import { PostoModule } from './modules/posto/posto.module';
import { PresoModule } from './modules/preso/preso.module';
import { PresoTipoModule } from './modules/presotipo/presotipo.module';
import { ProcOutrosModule } from './modules/procoutros/procoutros.module';
import { RecursoModule } from './modules/recurso/recurso.module';
import { ReintegradoModule } from './modules/reintegrado/reintegrado.module';
import { RespCivilModule } from './modules/respcivil/respcivil.module';
import { RestricaoModule } from './modules/restricao/restricao.module';
import { ResultadoModule } from './modules/resultado/resultado.module';
import { RoleModule } from './modules/role/role.module';
import { SaiModule } from './modules/sai/sai.module';
import { SaiDiligenciasModule } from './modules/saidiligencias/saidiligencias.module';
import { SindicanciaModule } from './modules/sindicancia/sindicancia.module';
import { SituacaoModule } from './modules/situacao/situacao.module';
import { SobrestamentoModule } from './modules/sobrestamento/sobrestamento.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { UploadModule } from './modules/upload/upload.module';
import { UserModule } from './modules/user/user.module';

export const registerModules = [
  AdlModule,
  AndamentoModule,
  AndamentocogerModule,
  ApfdModule,
  ArquivoModule,
  AuthModule,
  CdModule,
  CjModule,
  ComportamentoModule,
  DecorrenciaConselhoModule,
  DenunciaCivilModule,
  DesercaoModule,
  EnvolvidoModule,
  ExclusaoJudicialModule,
  FalecimentoModule,
  FatdModule,
  FeriadoModule,
  GradacaoModule,
  IpmModule,
  IsoModule,
  LigacaoModule,
  LoggerModule,
  MailModule,
  MotivoconselhoModule,
  MovimentoModule,
  OfendidoModule,
  PadModule,
  PendenciaModule,
  PermissionModule,
  PjModule,
  PostoModule,
  PresoModule,
  PresoTipoModule,
  ProcOutrosModule,
  RecursoModule,
  ReintegradoModule,
  RespCivilModule,
  RestricaoModule,
  ResultadoModule,
  RoleModule,
  SaiModule,
  SaiDiligenciasModule,
  SindicanciaModule,
  SituacaoModule,
  SobrestamentoModule,
  TasksModule,
  UploadModule,
  UserModule,
];
