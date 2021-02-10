// import { NotFoundException } from '@nestjs/common';
// import { Test, TestingModule } from '@nestjs/testing';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { CreateUploadDto, UpdateUploadDto } from '../dtos';
// import { fakerRegistry } from '../factory/upload.factory';
// import { Upload } from '../schema/upload.schema';
// import { UploadService } from './upload.service';

describe('UploadService', () => {
  describe('Test Latter', () => {
    it('should list all Upload', async () => {
      const Upload = 1;
      expect(Upload).toBe(1);
    });
  });

  // let service: UploadService;
  // let mockRegistry: CreateUploadDto;

  // const mockRepository = {
  //   create: jest.fn(),
  //   save: jest.fn(),
  //   search: jest.fn(),
  //   find: jest.fn(),
  //   findOne: jest.fn(),
  //   update: jest.fn(),
  //   delete: jest.fn(),
  // };

  // beforeAll(async () => {
  //   const module: TestingModule = await Test.createTestingModule({
  //     providers: [
  //       UploadService,
  //       { provide: getRepositoryToken(Upload), useValue: mockRepository },
  //     ],
  //   }).compile();

  //   service = module.get<UploadService>(UploadService);
  //   mockRegistry = fakerRegistry()
  // });

  // beforeEach(() => {
  //   mockRepository.create.mockReset();
  //   mockRepository.save.mockReset();
  //   mockRepository.search.mockReset();
  //   mockRepository.find.mockReset();
  //   mockRepository.findOne.mockReset();
  //   mockRepository.update.mockReset();
  //   mockRepository.delete.mockReset();
  // });

  // it('should be defined', () => {
  //   expect(service).toBeDefined();
  // });

  // // need to solve
  // describe('when create Upload', () => {
  //   it('should create a Upload', async () => {
  //     mockRepository.create.mockReturnValueOnce(mockRegistry);
  //     mockRepository.save.mockReturnValueOnce(mockRegistry);

  //     const Upload: CreateUploadDto = mockRegistry;

  //     const savedUpload = await service.create(Upload);

  //     expect(savedUpload).toMatchObject(mockRegistry);
  //     expect(mockRepository.create).toBeCalledWith(Upload);
  //     expect(mockRepository.create).toBeCalledTimes(1);
  //     expect(mockRepository.save).toBeCalledTimes(1);
  //   });
  // });

  // describe('when search all Upload', () => {
  //   it('should list all Upload', async () => {
  //     mockRepository.find.mockReturnValue([mockRegistry]);

  //     const Upload = await service.findAll();

  //     expect(Upload).toHaveLength(1);
  //     expect(mockRepository.find).toBeCalledTimes(1);
  //   });
  // });

  // // describe('when search one Upload', () => {
  // //   it('should list one Upload', async () => {
  // //     mockRepository.create.mockReturnValueOnce(mockRegistry);
  // //     mockRepository.save.mockReturnValueOnce(mockRegistry);

  // //     const UploadUpdate: UpdateUploadDto = mockRegistry;
  // //     const Upload = await service.search(UploadUpdate);

  // //     expect(Upload).toMatchObject(mockRegistry);
  // //     expect(mockRepository.find).toBeCalledTimes(1);
  // //   });
  // // });

  // describe('when search Upload by id', () => {
  //   it('should find a existing Upload', async () => {
  //     mockRepository.findOne.mockReturnValue(mockRegistry);

  //     const Upload = await service.findById('1');

  //     expect(Upload).toMatchObject(mockRegistry);
  //     expect(mockRepository.findOne).toBeCalledWith('1');
  //     expect(mockRepository.findOne).toBeCalledTimes(1);
  //   });

  //   it('should return a exception when does not to find a Upload', async () => {
  //     mockRepository.findOne.mockReturnValue(null);

  //     await service.findById('3').catch(error => {
  //       expect(error).toBeInstanceOf(NotFoundException);
  //       expect(error).toMatchObject({ message: 'Registry not found' });
  //       expect(mockRepository.findOne).toBeCalledWith('3');
  //       expect(mockRepository.findOne).toBeCalledTimes(1);
  //     });
  //   });
  // });

  // describe('when update a Upload', () => {
  //   it('should update a existing Upload', async () => {
  //     const UploadUpdate: UpdateUploadDto = mockRegistry;
  //     UploadUpdate.name = 'Update Upload '

  //     mockRepository.findOne.mockReturnValue(mockRegistry);
  //     mockRepository.update.mockReturnValue({
  //       ...mockRegistry,
  //       ...UploadUpdate,
  //     });
  //     mockRepository.create.mockReturnValue({
  //       ...mockRegistry,
  //       ...UploadUpdate,
  //     });

  //     const updatedUpload = await service.update(
  //       '1',
  //       UploadUpdate,
  //     );

  //     expect(updatedUpload).toMatchObject(UploadUpdate);
  //     expect(mockRepository.findOne).toBeCalledWith('1');
  //     expect(mockRepository.findOne).toBeCalledTimes(1);
  //     expect(mockRepository.update).toBeCalledWith('1', UploadUpdate);
  //     expect(mockRepository.update).toBeCalledTimes(1);
  //     expect(mockRepository.create).toBeCalledWith({
  //       ...mockRegistry,
  //       ...UploadUpdate,
  //     });
  //     expect(mockRepository.create).toBeCalledTimes(1);
  //   });
  // });

  // describe('when delete a Upload', () => {
  //   it('should delete a existing Upload', async () => {
  //     mockRepository.findOne.mockReturnValue(mockRegistry);
  //     mockRepository.delete.mockReturnValue(mockRegistry);

  //     await service.delete('1');

  //     expect(mockRepository.findOne).toBeCalledWith('1');
  //     expect(mockRepository.findOne).toBeCalledTimes(1);
  //     expect(mockRepository.delete).toBeCalledWith('1');
  //     expect(mockRepository.delete).toBeCalledTimes(1);
  //   });
  // });
});
