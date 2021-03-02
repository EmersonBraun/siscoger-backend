// import { Test, TestingModule } from '@nestjs/testing';
import { CreateIsoDto } from '../dtos';
import { fakerRegistry } from './iso.factory';

describe('IsoFactory', () => {
  it('should create a factory and return it', async () => {
    const Iso: CreateIsoDto = fakerRegistry();

    expect(Iso).toBe(Iso);
  });
});
