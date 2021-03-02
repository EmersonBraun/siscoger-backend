// import { Test, TestingModule } from '@nestjs/testing';
import { CreateDesercaoDto } from '../dtos';
import { fakerRegistry } from './desercao.factory';

describe('DesercaoFactory', () => {
  it('should create a factory and return it', async () => {
    const Desercao: CreateDesercaoDto = fakerRegistry();

    expect(Desercao).toBe(Desercao);
  });
});
