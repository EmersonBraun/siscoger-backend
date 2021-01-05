import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/sindicancias (GET)', () => {
    return request(app.getHttpServer()).get('/sindicancias').expect(200);
  });
  it('/sindicancias/portarias (POST)', () => {
    return request(app.getHttpServer())
      .get('/sindicancias/portarias')
      .expect(200);
  });
  it('/sindicancias (POST)', () => {
    return request(app.getHttpServer()).get('/sindicancias').expect(200);
  });
  it('/sindicancias/:id (GET)', () => {
    return request(app.getHttpServer()).get('/sindicancias/:id').expect(200);
  });
  it('/sindicancias/:id (PUT)', () => {
    return request(app.getHttpServer()).get('/sindicancias/:id').expect(200);
  });
  it('/sindicancias/:id (DELETE)', () => {
    return request(app.getHttpServer()).get('/sindicancias/:id').expect(200);
  });

  it('/adls (GET)', () => {
    return request(app.getHttpServer()).get('/adls').expect(200);
  });
  it('/adls/portarias (POST)', () => {
    return request(app.getHttpServer()).get('/adls/portarias').expect(200);
  });
  it('/adls (POST)', () => {
    return request(app.getHttpServer()).get('/adls').expect(200);
  });
  it('/adls/:id (GET)', () => {
    return request(app.getHttpServer()).get('/adls/:id').expect(200);
  });
  it('/adls/:id (PUT)', () => {
    return request(app.getHttpServer()).get('/adls/:id').expect(200);
  });
  it('/adls/:id (DELETE)', () => {
    return request(app.getHttpServer()).get('/adls/:id').expect(200);
  });

  it('/apfds (GET)', () => {
    return request(app.getHttpServer()).get('/apfds').expect(200);
  });
  it('/apfds/portarias (POST)', () => {
    return request(app.getHttpServer()).get('/apfds/portarias').expect(200);
  });
  it('/apfds (POST)', () => {
    return request(app.getHttpServer()).get('/apfds').expect(200);
  });
  it('/apfds/:id (GET)', () => {
    return request(app.getHttpServer()).get('/apfds/:id').expect(200);
  });
  it('/apfds/:id (PUT)', () => {
    return request(app.getHttpServer()).get('/apfds/:id').expect(200);
  });
  it('/apfds/:id (DELETE)', () => {
    return request(app.getHttpServer()).get('/apfds/:id').expect(200);
  });

  it('/andamentos (GET)', () => {
    return request(app.getHttpServer()).get('/andamentos').expect(200);
  });
  it('/andamentos/portarias (POST)', () => {
    return request(app.getHttpServer())
      .get('/andamentos/portarias')
      .expect(200);
  });
  it('/andamentos (POST)', () => {
    return request(app.getHttpServer()).get('/andamentos').expect(200);
  });
  it('/andamentos/:id (GET)', () => {
    return request(app.getHttpServer()).get('/andamentos/:id').expect(200);
  });
  it('/andamentos/:id (PUT)', () => {
    return request(app.getHttpServer()).get('/andamentos/:id').expect(200);
  });
  it('/andamentos/:id (DELETE)', () => {
    return request(app.getHttpServer()).get('/andamentos/:id').expect(200);
  });

  it('/andamentoscoger (GET)', () => {
    return request(app.getHttpServer()).get('/andamentoscoger').expect(200);
  });
  it('/andamentoscoger/portarias (POST)', () => {
    return request(app.getHttpServer())
      .get('/andamentoscoger/portarias')
      .expect(200);
  });
  it('/andamentoscoger (POST)', () => {
    return request(app.getHttpServer()).get('/andamentoscoger').expect(200);
  });
  it('/andamentoscoger/:id (GET)', () => {
    return request(app.getHttpServer()).get('/andamentoscoger/:id').expect(200);
  });
  it('/andamentoscoger/:id (PUT)', () => {
    return request(app.getHttpServer()).get('/andamentoscoger/:id').expect(200);
  });
  it('/andamentoscoger/:id (DELETE)', () => {
    return request(app.getHttpServer()).get('/andamentoscoger/:id').expect(200);
  });

  it('/arquivos (GET)', () => {
    return request(app.getHttpServer()).get('/arquivos').expect(200);
  });
  it('/arquivos/portarias (POST)', () => {
    return request(app.getHttpServer()).get('/arquivos/portarias').expect(200);
  });
  it('/arquivos (POST)', () => {
    return request(app.getHttpServer()).get('/arquivos').expect(200);
  });
  it('/arquivos/:id (GET)', () => {
    return request(app.getHttpServer()).get('/arquivos/:id').expect(200);
  });
  it('/arquivos/:id (PUT)', () => {
    return request(app.getHttpServer()).get('/arquivos/:id').expect(200);
  });
  it('/arquivos/:id (DELETE)', () => {
    return request(app.getHttpServer()).get('/arquivos/:id').expect(200);
  });

  it('/comportamentos (GET)', () => {
    return request(app.getHttpServer()).get('/comportamentos').expect(200);
  });
  it('/comportamentos/portarias (POST)', () => {
    return request(app.getHttpServer())
      .get('/comportamentos/portarias')
      .expect(200);
  });
  it('/comportamentos (POST)', () => {
    return request(app.getHttpServer()).get('/comportamentos').expect(200);
  });
  it('/comportamentos/:id (GET)', () => {
    return request(app.getHttpServer()).get('/comportamentos/:id').expect(200);
  });
  it('/comportamentos/:id (PUT)', () => {
    return request(app.getHttpServer()).get('/comportamentos/:id').expect(200);
  });
  it('/comportamentos/:id (DELETE)', () => {
    return request(app.getHttpServer()).get('/comportamentos/:id').expect(200);
  });

  it('/envolvidos (GET)', () => {
    return request(app.getHttpServer()).get('/envolvidos').expect(200);
  });
  it('/envolvidos/portarias (POST)', () => {
    return request(app.getHttpServer())
      .get('/envolvidos/portarias')
      .expect(200);
  });
  it('/envolvidos (POST)', () => {
    return request(app.getHttpServer()).get('/envolvidos').expect(200);
  });
  it('/envolvidos/:id (GET)', () => {
    return request(app.getHttpServer()).get('/envolvidos/:id').expect(200);
  });
  it('/envolvidos/:id (PUT)', () => {
    return request(app.getHttpServer()).get('/envolvidos/:id').expect(200);
  });
  it('/envolvidos/:id (DELETE)', () => {
    return request(app.getHttpServer()).get('/envolvidos/:id').expect(200);
  });

  it('/falecimentos (GET)', () => {
    return request(app.getHttpServer()).get('/falecimentos').expect(200);
  });
  it('/falecimentos/portarias (POST)', () => {
    return request(app.getHttpServer())
      .get('/falecimentos/portarias')
      .expect(200);
  });
  it('/falecimentos (POST)', () => {
    return request(app.getHttpServer()).get('/falecimentos').expect(200);
  });
  it('/falecimentos/:id (GET)', () => {
    return request(app.getHttpServer()).get('/falecimentos/:id').expect(200);
  });
  it('/falecimentos/:id (PUT)', () => {
    return request(app.getHttpServer()).get('/falecimentos/:id').expect(200);
  });
  it('/falecimentos/:id (DELETE)', () => {
    return request(app.getHttpServer()).get('/falecimentos/:id').expect(200);
  });

  it('/feriados (GET)', () => {
    return request(app.getHttpServer()).get('/feriados').expect(200);
  });
  it('/feriados/portarias (POST)', () => {
    return request(app.getHttpServer()).get('/feriados/portarias').expect(200);
  });
  it('/feriados (POST)', () => {
    return request(app.getHttpServer()).get('/feriados').expect(200);
  });
  it('/feriados/:id (GET)', () => {
    return request(app.getHttpServer()).get('/feriados/:id').expect(200);
  });
  it('/feriados/:id (PUT)', () => {
    return request(app.getHttpServer()).get('/feriados/:id').expect(200);
  });
  it('/feriados/:id (DELETE)', () => {
    return request(app.getHttpServer()).get('/feriados/:id').expect(200);
  });

  it('/gradacoes (GET)', () => {
    return request(app.getHttpServer()).get('/gradacoes').expect(200);
  });
  it('/gradacoes/portarias (POST)', () => {
    return request(app.getHttpServer()).get('/gradacoes/portarias').expect(200);
  });
  it('/gradacoes (POST)', () => {
    return request(app.getHttpServer()).get('/gradacoes').expect(200);
  });
  it('/gradacoes/:id (GET)', () => {
    return request(app.getHttpServer()).get('/gradacoes/:id').expect(200);
  });
  it('/gradacoes/:id (PUT)', () => {
    return request(app.getHttpServer()).get('/gradacoes/:id').expect(200);
  });
  it('/gradacoes/:id (DELETE)', () => {
    return request(app.getHttpServer()).get('/gradacoes/:id').expect(200);
  });

  it('/ligacoes (GET)', () => {
    return request(app.getHttpServer()).get('/ligacoes').expect(200);
  });
  it('/ligacoes/portarias (POST)', () => {
    return request(app.getHttpServer()).get('/ligacoes/portarias').expect(200);
  });
  it('/ligacoes (POST)', () => {
    return request(app.getHttpServer()).get('/ligacoes').expect(200);
  });
  it('/ligacoes/:id (GET)', () => {
    return request(app.getHttpServer()).get('/ligacoes/:id').expect(200);
  });
  it('/ligacoes/:id (PUT)', () => {
    return request(app.getHttpServer()).get('/ligacoes/:id').expect(200);
  });
  it('/ligacoes/:id (DELETE)', () => {
    return request(app.getHttpServer()).get('/ligacoes/:id').expect(200);
  });

  it('/movimentos (GET)', () => {
    return request(app.getHttpServer()).get('/movimentos').expect(200);
  });
  it('/movimentos/portarias (POST)', () => {
    return request(app.getHttpServer())
      .get('/movimentos/portarias')
      .expect(200);
  });
  it('/movimentos (POST)', () => {
    return request(app.getHttpServer()).get('/movimentos').expect(200);
  });
  it('/movimentos/:id (GET)', () => {
    return request(app.getHttpServer()).get('/movimentos/:id').expect(200);
  });
  it('/movimentos/:id (PUT)', () => {
    return request(app.getHttpServer()).get('/movimentos/:id').expect(200);
  });
  it('/movimentos/:id (DELETE)', () => {
    return request(app.getHttpServer()).get('/movimentos/:id').expect(200);
  });

  it('/ofendidos (GET)', () => {
    return request(app.getHttpServer()).get('/ofendidos').expect(200);
  });
  it('/ofendidos/portarias (POST)', () => {
    return request(app.getHttpServer()).get('/ofendidos/portarias').expect(200);
  });
  it('/ofendidos (POST)', () => {
    return request(app.getHttpServer()).get('/ofendidos').expect(200);
  });
  it('/ofendidos/:id (GET)', () => {
    return request(app.getHttpServer()).get('/ofendidos/:id').expect(200);
  });
  it('/ofendidos/:id (PUT)', () => {
    return request(app.getHttpServer()).get('/ofendidos/:id').expect(200);
  });
  it('/ofendidos/:id (DELETE)', () => {
    return request(app.getHttpServer()).get('/ofendidos/:id').expect(200);
  });

  it('/sobrestamentos (GET)', () => {
    return request(app.getHttpServer()).get('/sobrestamentos').expect(200);
  });
  it('/sobrestamentos/portarias (POST)', () => {
    return request(app.getHttpServer())
      .get('/sobrestamentos/portarias')
      .expect(200);
  });
  it('/sobrestamentos (POST)', () => {
    return request(app.getHttpServer()).get('/sobrestamentos').expect(200);
  });
  it('/sobrestamentos/:id (GET)', () => {
    return request(app.getHttpServer()).get('/sobrestamentos/:id').expect(200);
  });
  it('/sobrestamentos/:id (PUT)', () => {
    return request(app.getHttpServer()).get('/sobrestamentos/:id').expect(200);
  });
  it('/sobrestamentos/:id (DELETE)', () => {
    return request(app.getHttpServer()).get('/sobrestamentos/:id').expect(200);
  });

  it('/uploads (GET)', () => {
    return request(app.getHttpServer()).get('/uploads').expect(200);
  });
  it('/uploads/portarias (POST)', () => {
    return request(app.getHttpServer()).get('/uploads/portarias').expect(200);
  });
  it('/uploads (POST)', () => {
    return request(app.getHttpServer()).get('/uploads').expect(200);
  });
  it('/uploads/:id (GET)', () => {
    return request(app.getHttpServer()).get('/uploads/:id').expect(200);
  });
  it('/uploads/:id (PUT)', () => {
    return request(app.getHttpServer()).get('/uploads/:id').expect(200);
  });
  it('/uploads/:id (DELETE)', () => {
    return request(app.getHttpServer()).get('/uploads/:id').expect(200);
  });

  it('/users (GET)', () => {
    return request(app.getHttpServer()).get('/users').expect(200);
  });
  it('/users/portarias (POST)', () => {
    return request(app.getHttpServer()).get('/users/portarias').expect(200);
  });
  it('/users (POST)', () => {
    return request(app.getHttpServer()).get('/users').expect(200);
  });
  it('/users/:id (GET)', () => {
    return request(app.getHttpServer()).get('/users/:id').expect(200);
  });
  it('/users/:id (PUT)', () => {
    return request(app.getHttpServer()).get('/users/:id').expect(200);
  });
  it('/users/:id (DELETE)', () => {
    return request(app.getHttpServer()).get('/users/:id').expect(200);
  });

  it('/auth/login (POST)', () => {
    return request(app.getHttpServer()).get('/auth/login').expect(200);
  });
  it('/auth/whoami (GET)', () => {
    return request(app.getHttpServer()).get('/auth/whoami').expect(200);
  });
});
