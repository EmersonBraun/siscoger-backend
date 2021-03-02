// import { Test, TestingModule } from '@nestjs/testing';
import { CreateRespCivilDto } from '../dtos';
import { fakerRegistry } from './respcivil.factory';

describe('RespCivilFactory', () => {
  it('should create a factory and return it', async () => {
    const RespCivil: CreateRespCivilDto = fakerRegistry();

    expect(RespCivil).toBe(RespCivil);
  });
});
