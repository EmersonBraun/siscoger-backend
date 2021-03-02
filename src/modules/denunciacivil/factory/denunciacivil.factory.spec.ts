// import { Test, TestingModule } from '@nestjs/testing';
import { CreateDenunciacivilDto } from '../dtos';
import { fakerRegistry } from './denunciacivil.factory';

describe('denunciacivilFactory', () => {
  it('should create a factory and return it', async () => {
    const denunciacivil: CreateDenunciacivilDto = fakerRegistry();

    expect(denunciacivil).toBe(denunciacivil);
  });
});
