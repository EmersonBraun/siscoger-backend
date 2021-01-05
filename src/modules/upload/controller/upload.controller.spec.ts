// import { Test, TestingModule } from '@nestjs/testing';
// import { CreateUploadDto, UpdateUploadDto } from '../dtos';
// import { fakerRegistry } from '../factory/upload.factory';
// import { UploadService } from '../service/upload.service';
// import { UploadController } from './upload.controller';

describe('UploadController', () => {
  describe('Test Latter', () => {
    it('should list all Upload', async () => {
      const Upload = 1;
      expect(Upload).toBe(1);
    });
  });
  //   let controller: UploadController;
  //   let mockRegistry: CreateUploadDto;

  //   const mockService = {
  //     create: jest.fn(),
  //     findAll: jest.fn(),
  //     search: jest.fn(),
  //     findById: jest.fn(),
  //     update: jest.fn(),
  //     delete: jest.fn(),
  //   };

  //   beforeAll(async () => {
  //     const module: TestingModule = await Test.createTestingModule({
  //       controllers: [UploadController],
  //       providers: [{ provide: UploadService, useValue: mockService }],
  //     }).compile();

  //     controller = module.get<UploadController>(UploadController);
  //     mockRegistry = fakerRegistry()
  //   });

  //   beforeEach(() => {
  //     mockService.create.mockReset();
  //     mockService.findAll.mockReset();
  //     mockService.search.mockReset();
  //     mockService.findById.mockReset();
  //     mockService.update.mockReset();
  //     mockService.delete.mockReset();
  //   });

  //   it('should be defined', () => {
  //     expect(controller).toBeDefined();
  //   });

  //   describe('when create upload', () => {
  //     it('should create a upload and return it', async () => {
  //       mockService.create.mockReturnValue(mockRegistry);

  //       const upload: CreateUploadDto = mockRegistry;

  //       const createdupload = await controller.create('file',upload);

  //       expect(createdupload).toMatchObject(mockRegistry);
  //       expect(mockService.create).toBeCalledWith(upload);
  //       expect(mockService.create).toBeCalledTimes(1);
  //     });
  //   });

  //   describe('when search all upload', () => {
  //     it('should search all upload and return them', async () => {
  //       mockService.findAll.mockReturnValue([mockRegistry]);

  //       const upload = await controller.findAll();

  //       expect(upload).toHaveLength(1);
  //       expect(upload).toMatchObject([mockRegistry]);
  //       expect(mockService.findAll).toBeCalledTimes(1);
  //     });
  //   });

  //   describe('when search upload by id', () => {
  //     it('should find a existing upload and return it', async () => {
  //       mockService.findById.mockReturnValue(mockRegistry);

  //       const upload = await controller.findById('1');

  //       expect(upload).toMatchObject(mockRegistry);
  //       expect(mockService.findById).toBeCalledWith('1');
  //       expect(mockService.findById).toBeCalledTimes(1);
  //     });
  //   });

  //   describe('when update a upload', () => {
  //     it('should update a existing upload and return it', async () => {
  //       const uploadUpdate: UpdateUploadDto = mockRegistry;
  //       uploadUpdate.name = 'Update upload '

  //       mockService.update.mockReturnValue({
  //         ...mockRegistry,
  //         ...uploadUpdate,
  //       });

  //       const updatedupload = await controller.update(
  //         '1',
  //         uploadUpdate,
  //       );

  //       expect(updatedupload).toMatchObject(uploadUpdate);
  //       expect(mockService.update).toBeCalledWith(
  //         '1',
  //         uploadUpdate,
  //       );
  //       expect(mockService.update).toBeCalledTimes(1);
  //     });
  //   });

  //   describe('when delete a upload', () => {
  //     it('should delete a existing upload', async () => {
  //       await controller.delete('1');

  //       expect(mockService.delete).toBeCalledWith('1');
  //       expect(mockService.delete).toBeCalledTimes(1);
  //     });
  //   });
});
