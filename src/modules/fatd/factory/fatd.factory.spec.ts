// import { Test, TestingModule } from '@nestjs/testing';
import { CreateFatdDto } from '../dtos';
import { fakerRegistry } from './fatd.factory';

describe('FatdFactory', () => {
  it('should create a factory and return it', async () => {
    const Fatd: CreateFatdDto = fakerRegistry();

    expect(Fatd).toBe(Fatd);
  });
});
