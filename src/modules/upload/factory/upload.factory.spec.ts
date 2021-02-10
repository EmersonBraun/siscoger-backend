// import { Test, TestingModule } from '@nestjs/testing';
import { CreateUploadDto } from '../dtos';
import { fakerRegistry } from './upload.factory';

describe('UploadFactory', () => {
  it('should create a factory and return it', async () => {
    const Upload: CreateUploadDto = fakerRegistry();

    expect(Upload).toBe(Upload);
  });
});
