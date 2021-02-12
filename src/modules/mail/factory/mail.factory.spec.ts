// import { Test, TestingModule } from '@nestjs/testing';
import { CreateMailDto } from '../dtos';
import { fakerRegistry } from './mail.factory';

describe('MailFactory', () => {
  it('should create a factory and return it', async () => {
    const Mail: CreateMailDto = fakerRegistry();

    expect(Mail).toBe(Mail);
  });
});
