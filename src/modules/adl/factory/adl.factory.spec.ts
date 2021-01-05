// import { Test, TestingModule } from '@nestjs/testing';
import { CreateAdlDto } from '../dtos/create.dto';
import fakerRegistry from './adl.factory';

describe('AdlFactory', () => {
  it('should create a factory and return it', async () => {
    const Adl: CreateAdlDto = fakerRegistry();

    expect(Adl).toBe(Adl);
  });
});
