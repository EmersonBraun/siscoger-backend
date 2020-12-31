// import { Test, TestingModule } from '@nestjs/testing';
import { CreateLogDto } from '../dtos';
import { fakerRegistry } from './log.factory';

describe('LogFactory', () => {
  it('should create a factory and return it', async () => {
    const Log: CreateLogDto = fakerRegistry();

    expect(Log).toBe(Log)
  });
});
