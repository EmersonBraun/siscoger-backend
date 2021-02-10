// import { Test, TestingModule } from '@nestjs/testing';
import { CreateApfdDto } from '../dtos';
import { fakerRegistry } from './apfd.factory';

describe('ApfdFactory', () => {
  it('should create a factory and return it', async () => {
    const Apfd: CreateApfdDto = fakerRegistry();

    expect(Apfd).toBe(Apfd);
  });
});
