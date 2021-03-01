// import { Test, TestingModule } from '@nestjs/testing';
import { CreateCdDto } from '../dtos';
import { fakerRegistry } from './cd.factory';

describe('CdFactory', () => {
  it('should create a factory and return it', async () => {
    const cdVariable: CreateCdDto = fakerRegistry();

    expect(cdVariable).toBe(cdVariable);
  });
});
