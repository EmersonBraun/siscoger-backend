// import { Test, TestingModule } from '@nestjs/testing';
import { CreateCdDto } from '../dtos';
import { fakerRegister } from './cd.factory';

describe('CdFactory', () => {
  it('should create a factory and return it', async () => {
    const cdVariable: CreateCdDto = fakerRegister();

    expect(cdVariable).toBe(cdVariable);
  });
});
