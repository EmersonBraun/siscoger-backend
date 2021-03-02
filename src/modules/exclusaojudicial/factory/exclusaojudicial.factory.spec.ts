// import { Test, TestingModule } from '@nestjs/testing';
import { CreateExclusaoJudicialDto } from '../dtos';
import { fakerRegistry } from './exclusaojudicial.factory';

describe('ExclusaoJudicialFactory', () => {
  it('should create a factory and return it', async () => {
    const ExclusaoJudicial: CreateExclusaoJudicialDto = fakerRegistry();

    expect(ExclusaoJudicial).toBe(ExclusaoJudicial);
  });
});
