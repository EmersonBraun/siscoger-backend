// import { Test, TestingModule } from '@nestjs/testing';
import { CreatePadDto } from '../dtos';
import { fakerRegistry } from './pad.factory';

describe('padFactory', () => {
  it('should create a factory and return it', async () => {
    const pad: CreatePadDto = fakerRegistry();

    expect(pad).toBe(pad);
  });
});
