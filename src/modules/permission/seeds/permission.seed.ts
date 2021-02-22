import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { Permission } from '../entity/permission.entity';

export default class Createpermissions implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    // await factory(Role)().createMany(10);

    await connection
      .createQueryBuilder()
      .insert()
      .into(Permission)
      .values([
        { permission: 'listar-adl', group: 'adl', description: 'listar adl' },
        { permission: 'ver-adl', group: 'adl', description: 'ver adl' },
        { permission: 'criar-adl', group: 'adl', description: 'criar adl' },
        { permission: 'editar-adl', group: 'adl', description: 'editar adl' },
        { permission: 'apagar-adl', group: 'adl', description: 'apagar adl' },
        {
          permission: 'listar-andamento',
          group: 'andamento',
          description: 'listar andamento',
        },
        {
          permission: 'ver-andamento',
          group: 'andamento',
          description: 'ver andamento',
        },
        {
          permission: 'criar-andamento',
          group: 'andamento',
          description: 'criar andamento',
        },
        {
          permission: 'editar-andamento',
          group: 'andamento',
          description: 'editar andamento',
        },
        {
          permission: 'apagar-andamento',
          group: 'andamento',
          description: 'apagar andamento',
        },
        {
          permission: 'listar-andamentocoger',
          description: 'listar andamentocoger',
        },
        {
          permission: 'ver-andamentocoger',
          group: 'andamentocoger',
          description: 'ver andamentocoger',
        },
        {
          permission: 'criar-andamentocoger',
          group: 'andamentocoger',
          description: 'criar andamentocoger',
        },
        {
          permission: 'editar-andamentocoger',
          group: 'andamentocoger',
          description: 'editar andamentocoger',
        },
        {
          permission: 'apagar-andamentocoger',
          group: 'andamentocoger',
          description: 'apagar andamentocoger',
        },
        {
          permission: 'listar-apfd',
          group: 'apfd',
          description: 'listar apfd',
        },
        { permission: 'ver-apfd', group: 'apfd', description: 'ver apfd' },
        { permission: 'criar-apfd', group: 'apfd', description: 'criar apfd' },
        {
          permission: 'editar-apfd',
          group: 'apfd',
          description: 'editar apfd',
        },
        {
          permission: 'apagar-apfd',
          group: 'apfd',
          description: 'apagar apfd',
        },
        {
          permission: 'listar-arquivo',
          group: 'arquivo',
          description: 'listar arquivo',
        },
        {
          permission: 'ver-arquivo',
          group: 'arquivo',
          description: 'ver arquivo',
        },
        {
          permission: 'criar-arquivo',
          group: 'arquivo',
          description: 'criar arquivo',
        },
        {
          permission: 'editar-arquivo',
          group: 'arquivo',
          description: 'editar arquivo',
        },
        {
          permission: 'apagar-arquivo',
          group: 'arquivo',
          description: 'apagar arquivo',
        },
        { permission: 'listar-cd', group: 'cd', description: 'listar cd' },
        { permission: 'ver-cd', group: 'cd', description: 'ver cd' },
        { permission: 'criar-cd', group: 'cd', description: 'criar cd' },
        { permission: 'editar-cd', group: 'cd', description: 'editar cd' },
        { permission: 'apagar-cd', group: 'cd', description: 'apagar cd' },
        { permission: 'listar-cj', group: 'cj', description: 'listar cj' },
        { permission: 'ver-cj', group: 'cj', description: 'ver cj' },
        { permission: 'criar-cj', group: 'cj', description: 'criar cj' },
        { permission: 'editar-cj', group: 'cj', description: 'editar cj' },
        { permission: 'apagar-cj', group: 'cj', description: 'apagar cj' },
        {
          permission: 'listar-comportamento',
          group: 'comportamento',
          description: 'listar comportamento',
        },
        {
          permission: 'ver-comportamento',
          group: 'comportamento',
          description: 'ver comportamento',
        },
        {
          permission: 'criar-comportamento',
          group: 'comportamento',
          description: 'criar comportamento',
        },
        {
          permission: 'editar-comportamento',
          group: 'comportamento',
          description: 'editar comportamento',
        },
        {
          permission: 'apagar-comportamento',
          group: 'comportamento',
          description: 'apagar comportamento',
        },
        {
          permission: 'listar-decorrenciaconselho',
          group: 'decorrenciaconselho',
          description: 'listar decorrenciaconselho',
        },
        {
          permission: 'ver-decorrenciaconselho',
          group: 'decorrenciaconselho',
          description: 'ver decorrenciaconselho',
        },
        {
          permission: 'criar-decorrenciaconselho',
          group: 'decorrenciaconselho',
          description: 'criar decorrenciaconselho',
        },
        {
          permission: 'editar-decorrenciaconselho',
          group: 'decorrenciaconselho',
          description: 'editar decorrenciaconselho',
        },
        {
          permission: 'apagar-decorrenciaconselho',
          group: 'decorrenciaconselho',
          description: 'apagar decorrenciaconselho',
        },
        {
          permission: 'listar-denunciacivil',
          group: 'denunciacivil',
          description: 'listar denunciacivil',
        },
        {
          permission: 'ver-denunciacivil',
          group: 'denunciacivil',
          description: 'ver denunciacivil',
        },
        {
          permission: 'criar-denunciacivil',
          group: 'denunciacivil',
          description: 'criar denunciacivil',
        },
        {
          permission: 'editar-denunciacivil',
          group: 'denunciacivil',
          description: 'editar denunciacivil',
        },
        {
          permission: 'apagar-denunciacivil',
          group: 'denunciacivil',
          description: 'apagar denunciacivil',
        },
        {
          permission: 'listar-desercao',
          group: 'desercao',
          description: 'listar desercao',
        },
        {
          permission: 'ver-desercao',
          group: 'desercao',
          description: 'ver desercao',
        },
        {
          permission: 'criar-desercao',
          group: 'desercao',
          description: 'criar desercao',
        },
        {
          permission: 'editar-desercao',
          group: 'desercao',
          description: 'editar desercao',
        },
        {
          permission: 'apagar-desercao',
          group: 'desercao',
          description: 'apagar desercao',
        },
        {
          permission: 'listar-envolvido',
          group: 'envolvido',
          description: 'listar envolvido',
        },
        {
          permission: 'ver-envolvido',
          group: 'envolvido',
          description: 'ver envolvido',
        },
        {
          permission: 'criar-envolvido',
          group: 'envolvido',
          description: 'criar envolvido',
        },
        {
          permission: 'editar-envolvido',
          group: 'envolvido',
          description: 'editar envolvido',
        },
        {
          permission: 'apagar-envolvido',
          group: 'envolvido',
          description: 'apagar envolvido',
        },
        {
          permission: 'listar-exclusaojudicial',
          group: 'exclusaojudicial',
          description: 'listar exclusaojudicial',
        },
        {
          permission: 'ver-exclusaojudicial',
          group: 'exclusaojudicial',
          description: 'ver exclusaojudicial',
        },
        {
          permission: 'criar-exclusaojudicial',
          group: 'exclusaojudicial',
          description: 'criar exclusaojudicial',
        },
        {
          permission: 'editar-exclusaojudicial',
          group: 'exclusaojudicial',
          description: 'editar exclusaojudicial',
        },
        {
          permission: 'apagar-exclusaojudicial',
          group: 'exclusaojudicial',
          description: 'apagar exclusaojudicial',
        },
        {
          permission: 'listar-falecimento',
          group: 'falecimento',
          description: 'listar falecimento',
        },
        {
          permission: 'ver-falecimento',
          group: 'falecimento',
          description: 'ver falecimento',
        },
        {
          permission: 'criar-falecimento',
          group: 'falecimento',
          description: 'criar falecimento',
        },
        {
          permission: 'editar-falecimento',
          group: 'falecimento',
          description: 'editar falecimento',
        },
        {
          permission: 'apagar-falecimento',
          group: 'falecimento',
          description: 'apagar falecimento',
        },
        {
          permission: 'listar-fatd',
          group: 'fatd',
          description: 'listar fatd',
        },
        { permission: 'ver-fatd', group: 'fatd', description: 'ver fatd' },
        { permission: 'criar-fatd', group: 'fatd', description: 'criar fatd' },
        {
          permission: 'editar-fatd',
          group: 'fatd',
          description: 'editar fatd',
        },
        {
          permission: 'apagar-fatd',
          group: 'fatd',
          description: 'apagar fatd',
        },
        {
          permission: 'listar-feriado',
          group: 'feriado',
          description: 'listar feriado',
        },
        {
          permission: 'ver-feriado',
          group: 'feriado',
          description: 'ver feriado',
        },
        {
          permission: 'criar-feriado',
          group: 'feriado',
          description: 'criar feriado',
        },
        {
          permission: 'editar-feriado',
          group: 'feriado',
          description: 'editar feriado',
        },
        {
          permission: 'apagar-feriado',
          group: 'feriado',
          description: 'apagar feriado',
        },
        {
          permission: 'listar-gradacao',
          group: 'gradacao',
          description: 'listar gradacao',
        },
        {
          permission: 'ver-gradacao',
          group: 'gradacao',
          description: 'ver gradacao',
        },
        {
          permission: 'criar-gradacao',
          group: 'gradacao',
          description: 'criar gradacao',
        },
        {
          permission: 'editar-gradacao',
          group: 'gradacao',
          description: 'editar gradacao',
        },
        {
          permission: 'apagar-gradacao',
          group: 'gradacao',
          description: 'apagar gradacao',
        },
        { permission: 'listar-ipm', group: 'ipm', description: 'listar ipm' },
        { permission: 'ver-ipm', group: 'ipm', description: 'ver ipm' },
        { permission: 'criar-ipm', group: 'ipm', description: 'criar ipm' },
        { permission: 'editar-ipm', group: 'ipm', description: 'editar ipm' },
        { permission: 'apagar-ipm', group: 'ipm', description: 'apagar ipm' },
        { permission: 'listar-iso', group: 'iso', description: 'listar iso' },
        { permission: 'ver-iso', group: 'iso', description: 'ver iso' },
        { permission: 'criar-iso', group: 'iso', description: 'criar iso' },
        { permission: 'editar-iso', group: 'iso', description: 'editar iso' },
        { permission: 'apagar-iso', group: 'iso', description: 'apagar iso' },
        {
          permission: 'listar-ligacao',
          group: 'ligacao',
          description: 'listar ligacao',
        },
        {
          permission: 'ver-ligacao',
          group: 'ligacao',
          description: 'ver ligacao',
        },
        {
          permission: 'criar-ligacao',
          group: 'ligacao',
          description: 'criar ligacao',
        },
        {
          permission: 'editar-ligacao',
          group: 'ligacao',
          description: 'editar ligacao',
        },
        {
          permission: 'apagar-ligacao',
          group: 'ligacao',
          description: 'apagar ligacao',
        },
        { permission: 'listar-log', group: 'log', description: 'listar log' },
        { permission: 'ver-log', group: 'log', description: 'ver log' },
        {
          permission: 'listar-motivoconselho',
          group: 'motivoconselho',
          description: 'listar motivoconselho',
        },
        {
          permission: 'ver-motivoconselho',
          group: 'motivoconselho',
          description: 'ver motivoconselho',
        },
        {
          permission: 'criar-motivoconselho',
          group: 'motivoconselho',
          description: 'criar motivoconselho',
        },
        {
          permission: 'editar-motivoconselho',
          group: 'motivoconselho',
          description: 'editar motivoconselho',
        },
        {
          permission: 'apagar-motivoconselho',
          group: 'motivoconselho',
          description: 'apagar motivoconselho',
        },
        {
          permission: 'listar-movimento',
          group: 'movimento',
          description: 'listar movimento',
        },
        {
          permission: 'ver-movimento',
          group: 'movimento',
          description: 'ver movimento',
        },
        {
          permission: 'criar-movimento',
          group: 'movimento',
          description: 'criar movimento',
        },
        {
          permission: 'editar-movimento',
          group: 'movimento',
          description: 'editar movimento',
        },
        {
          permission: 'apagar-movimento',
          group: 'movimento',
          description: 'apagar movimento',
        },
        {
          permission: 'listar-ofendido',
          group: 'ofendido',
          description: 'listar ofendido',
        },
        {
          permission: 'ver-ofendido',
          group: 'ofendido',
          description: 'ver ofendido',
        },
        {
          permission: 'criar-ofendido',
          group: 'ofendido',
          description: 'criar ofendido',
        },
        {
          permission: 'editar-ofendido',
          group: 'ofendido',
          description: 'editar ofendido',
        },
        {
          permission: 'apagar-ofendido',
          group: 'ofendido',
          description: 'apagar ofendido',
        },
        { permission: 'listar-pad', group: 'pad', description: 'listar pad' },
        { permission: 'ver-pad', group: 'pad', description: 'ver pad' },
        { permission: 'criar-pad', group: 'pad', description: 'criar pad' },
        { permission: 'editar-pad', group: 'pad', description: 'editar pad' },
        { permission: 'apagar-pad', group: 'pad', description: 'apagar pad' },
        {
          permission: 'listar-pendencias',
          group: 'pendencias',
          description: 'listar pendencias',
        },
        {
          permission: 'ver-pendencias',
          group: 'pendencias',
          description: 'ver pendencias',
        },
        {
          permission: 'criar-pendencias',
          group: 'pendencias',
          description: 'criar pendencias',
        },
        {
          permission: 'editar-pendencias',
          group: 'pendencias',
          description: 'editar pendencias',
        },
        {
          permission: 'apagar-pendencias',
          group: 'pendencias',
          description: 'apagar pendencias',
        },
        {
          permission: 'listar-permissao',
          group: 'permissao',
          description: 'listar permissao',
        },
        {
          permission: 'ver-permissao',
          group: 'permissao',
          description: 'ver permissao',
        },
        {
          permission: 'criar-permissao',
          group: 'permissao',
          description: 'criar permissao',
        },
        {
          permission: 'editar-permissao',
          group: 'permissao',
          description: 'editar permissao',
        },
        {
          permission: 'apagar-permissao',
          group: 'permissao',
          description: 'apagar permissao',
        },
        { permission: 'listar-pj', group: 'pj', description: 'listar pj' },
        { permission: 'ver-pj', group: 'pj', description: 'ver pj' },
        { permission: 'criar-pj', group: 'pj', description: 'criar pj' },
        { permission: 'editar-pj', group: 'pj', description: 'editar pj' },
        { permission: 'apagar-pj', group: 'pj', description: 'apagar pj' },
        {
          permission: 'listar-posto',
          group: 'posto',
          description: 'listar posto',
        },
        { permission: 'ver-posto', group: 'posto', description: 'ver posto' },
        {
          permission: 'criar-posto',
          group: 'posto',
          description: 'criar posto',
        },
        {
          permission: 'editar-posto',
          group: 'posto',
          description: 'editar posto',
        },
        {
          permission: 'apagar-posto',
          group: 'posto',
          description: 'apagar posto',
        },
        {
          permission: 'listar-preso',
          group: 'preso',
          description: 'listar preso',
        },
        { permission: 'ver-preso', group: 'preso', description: 'ver preso' },
        {
          permission: 'criar-preso',
          group: 'preso',
          description: 'criar preso',
        },
        {
          permission: 'editar-preso',
          group: 'preso',
          description: 'editar preso',
        },
        {
          permission: 'apagar-preso',
          group: 'preso',
          description: 'apagar preso',
        },
        {
          permission: 'listar-presotipo',
          group: 'presotipo',
          description: 'listar presotipo',
        },
        {
          permission: 'ver-presotipo',
          group: 'presotipo',
          description: 'ver presotipo',
        },
        {
          permission: 'criar-presotipo',
          group: 'presotipo',
          description: 'criar presotipo',
        },
        {
          permission: 'editar-presotipo',
          group: 'presotipo',
          description: 'editar presotipo',
        },
        {
          permission: 'apagar-presotipo',
          group: 'presotipo',
          description: 'apagar presotipo',
        },
        {
          permission: 'listar-procoutros',
          group: 'procoutros',
          description: 'listar procoutros',
        },
        {
          permission: 'ver-procoutros',
          group: 'procoutros',
          description: 'ver procoutros',
        },
        {
          permission: 'criar-procoutros',
          group: 'procoutros',
          description: 'criar procoutros',
        },
        {
          permission: 'editar-procoutros',
          group: 'procoutros',
          description: 'editar procoutros',
        },
        {
          permission: 'apagar-procoutros',
          group: 'procoutros',
          description: 'apagar procoutros',
        },
        {
          permission: 'listar-recurso',
          group: 'recurso',
          description: 'listar recurso',
        },
        {
          permission: 'ver-recurso',
          group: 'recurso',
          description: 'ver recurso',
        },
        {
          permission: 'criar-recurso',
          group: 'recurso',
          description: 'criar recurso',
        },
        {
          permission: 'editar-recurso',
          group: 'recurso',
          description: 'editar recurso',
        },
        {
          permission: 'apagar-recurso',
          group: 'recurso',
          description: 'apagar recurso',
        },
        {
          permission: 'listar-reintegrado',
          group: 'reintegrado',
          description: 'listar reintegrado',
        },
        {
          permission: 'ver-reintegrado',
          group: 'reintegrado',
          description: 'ver reintegrado',
        },
        {
          permission: 'criar-reintegrado',
          group: 'reintegrado',
          description: 'criar reintegrado',
        },
        {
          permission: 'editar-reintegrado',
          group: 'reintegrado',
          description: 'editar reintegrado',
        },
        {
          permission: 'apagar-reintegrado',
          group: 'reintegrado',
          description: 'apagar reintegrado',
        },
        {
          permission: 'listar-respcivil',
          group: 'respcivil',
          description: 'listar respcivil',
        },
        {
          permission: 'ver-respcivil',
          group: 'respcivil',
          description: 'ver respcivil',
        },
        {
          permission: 'criar-respcivil',
          group: 'respcivil',
          description: 'criar respcivil',
        },
        {
          permission: 'editar-respcivil',
          group: 'respcivil',
          description: 'editar respcivil',
        },
        {
          permission: 'apagar-respcivil',
          group: 'respcivil',
          description: 'apagar respcivil',
        },
        {
          permission: 'listar-restricao',
          group: 'restricao',
          description: 'listar restricao',
        },
        {
          permission: 'ver-restricao',
          group: 'restricao',
          description: 'ver restricao',
        },
        {
          permission: 'criar-restricao',
          group: 'restricao',
          description: 'criar restricao',
        },
        {
          permission: 'editar-restricao',
          group: 'restricao',
          description: 'editar restricao',
        },
        {
          permission: 'apagar-restricao',
          group: 'restricao',
          description: 'apagar restricao',
        },
        {
          permission: 'listar-resultado',
          group: 'resultado',
          description: 'listar resultado',
        },
        {
          permission: 'ver-resultado',
          group: 'resultado',
          description: 'ver resultado',
        },
        {
          permission: 'criar-resultado',
          group: 'resultado',
          description: 'criar resultado',
        },
        {
          permission: 'editar-resultado',
          group: 'resultado',
          description: 'editar resultado',
        },
        {
          permission: 'apagar-resultado',
          group: 'resultado',
          description: 'apagar resultado',
        },
        {
          permission: 'listar-papel',
          group: 'papel',
          description: 'listar papel',
        },
        { permission: 'ver-papel', group: 'papel', description: 'ver papel' },
        {
          permission: 'criar-papel',
          group: 'papel',
          description: 'criar papel',
        },
        {
          permission: 'editar-papel',
          group: 'papel',
          description: 'editar papel',
        },
        {
          permission: 'apagar-papel',
          group: 'papel',
          description: 'apagar papel',
        },
        { permission: 'listar-sai', group: 'sai', description: 'listar sai' },
        { permission: 'ver-sai', group: 'sai', description: 'ver sai' },
        { permission: 'criar-sai', group: 'sai', description: 'criar sai' },
        { permission: 'editar-sai', group: 'sai', description: 'editar sai' },
        { permission: 'apagar-sai', group: 'sai', description: 'apagar sai' },
        {
          permission: 'listar-sindicancia',
          group: 'sindicancia',
          description: 'listar sindicancia',
        },
        {
          permission: 'ver-sindicancia',
          group: 'sindicancia',
          description: 'ver sindicancia',
        },
        {
          permission: 'criar-sindicancia',
          group: 'sindicancia',
          description: 'criar sindicancia',
        },
        {
          permission: 'editar-sindicancia',
          group: 'sindicancia',
          description: 'editar sindicancia',
        },
        {
          permission: 'apagar-sindicancia',
          group: 'sindicancia',
          description: 'apagar sindicancia',
        },
        {
          permission: 'listar-situacao',
          group: 'situacao',
          description: 'listar situacao',
        },
        {
          permission: 'ver-situacao',
          group: 'situacao',
          description: 'ver situacao',
        },
        {
          permission: 'criar-situacao',
          group: 'situacao',
          description: 'criar situacao',
        },
        {
          permission: 'editar-situacao',
          group: 'situacao',
          description: 'editar situacao',
        },
        {
          permission: 'apagar-situacao',
          group: 'situacao',
          description: 'apagar situacao',
        },
        {
          permission: 'listar-sobrestamento',
          group: 'sobrestamento',
          description: 'listar sobrestamento',
        },
        {
          permission: 'ver-sobrestamento',
          group: 'sobrestamento',
          description: 'ver sobrestamento',
        },
        {
          permission: 'criar-sobrestamento',
          group: 'sobrestamento',
          description: 'criar sobrestamento',
        },
        {
          permission: 'editar-sobrestamento',
          group: 'sobrestamento',
          description: 'editar sobrestamento',
        },
        {
          permission: 'apagar-sobrestamento',
          group: 'sobrestamento',
          description: 'apagar sobrestamento',
        },
        {
          permission: 'listar-upload',
          group: 'upload',
          description: 'listar upload',
        },
        {
          permission: 'ver-upload',
          group: 'upload',
          description: 'ver upload',
        },
        {
          permission: 'criar-upload',
          group: 'upload',
          description: 'criar upload',
        },
        {
          permission: 'editar-upload',
          group: 'upload',
          description: 'editar upload',
        },
        {
          permission: 'apagar-upload',
          group: 'upload',
          description: 'apagar upload',
        },
        {
          permission: 'listar-user',
          group: 'user',
          description: 'listar user',
        },
        { permission: 'ver-user', group: 'user', description: 'ver user' },
        { permission: 'criar-user', group: 'user', description: 'criar user' },
        {
          permission: 'editar-user',
          group: 'user',
          description: 'editar user',
        },
        {
          permission: 'apagar-user',
          group: 'user',
          description: 'apagar user',
        },
      ])
      .execute();
  }

  // await factory(Permission)().createMany(10);
}
