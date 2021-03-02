// import { Test, TestingModule } from '@nestjs/testing';
import { CreateIpmDto } from '../dtos';
import { fakerRegistry } from './ipm.factory';

describe('IpmFactory', () => {
  it('should create a factory and return it', async () => {
    const Ipm: CreateIpmDto = fakerRegistry();

    expect(Ipm).toBe(Ipm);
  });
});
