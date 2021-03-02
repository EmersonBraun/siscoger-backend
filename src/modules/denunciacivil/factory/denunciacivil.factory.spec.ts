// import { Test, TestingModule } from '@nestjs/testing';
import { CreateDenunciaCivilDto } from '../dtos';
import { fakerRegistry } from './denunciacivil.factory';

describe('denunciacivilFactory', () => {
  it('should create a factory and return it', async () => {
    const denunciacivil: CreateDenunciaCivilDto = fakerRegistry();

    expect(denunciacivil).toBe(denunciacivil);
  });
});
