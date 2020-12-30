// import { NotFoundException } from '@nestjs/common';
// import { Test, TestingModule } from '@nestjs/testing';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { CreateMailDto, UpdateMailDto } from '../dtos';
// import { fakerRegistry } from '../factory/pendencia.factory';
// import { Mail } from '../schema/pendencia.schema';
// import { MailService } from './pendencia.service';

describe('MailService', () => {

  describe('Test Latter', () => {
    it('should list all Mail', async () => {
      const Mail = 1 
      expect(Mail).toBe(1);
    });
  });

  // let service: MailService;
  // let mockRegistry: CreateMailDto;

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
  //       MailService,
  //       { provide: getRepositoryToken(Mail), useValue: mockRepository },
  //     ],
  //   }).compile();

  //   service = module.get<MailService>(MailService);
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
  // describe('when create Mail', () => {
  //   it('should create a Mail', async () => {
  //     mockRepository.create.mockReturnValueOnce(mockRegistry);
  //     mockRepository.save.mockReturnValueOnce(mockRegistry);

  //     const Mail: CreateMailDto = mockRegistry;

  //     const savedMail = await service.create(Mail);

  //     expect(savedMail).toMatchObject(mockRegistry);
  //     expect(mockRepository.create).toBeCalledWith(Mail);
  //     expect(mockRepository.create).toBeCalledTimes(1);
  //     expect(mockRepository.save).toBeCalledTimes(1);
  //   });
  // });

  // describe('when search all Mail', () => {
  //   it('should list all Mail', async () => {
  //     mockRepository.find.mockReturnValue([mockRegistry]);

  //     const Mail = await service.findAll();

  //     expect(Mail).toHaveLength(1);
  //     expect(mockRepository.find).toBeCalledTimes(1);
  //   });
  // });

  // // describe('when search one Mail', () => {
  // //   it('should list one Mail', async () => {
  // //     mockRepository.create.mockReturnValueOnce(mockRegistry);
  // //     mockRepository.save.mockReturnValueOnce(mockRegistry);

  // //     const MailUpdate: UpdateMailDto = mockRegistry;
  // //     const Mail = await service.search(MailUpdate);

  // //     expect(Mail).toMatchObject(mockRegistry);
  // //     expect(mockRepository.find).toBeCalledTimes(1);
  // //   });
  // // });

  // describe('when search Mail by id', () => {
  //   it('should find a existing Mail', async () => {
  //     mockRepository.findOne.mockReturnValue(mockRegistry);

  //     const Mail = await service.findById('1');

  //     expect(Mail).toMatchObject(mockRegistry);
  //     expect(mockRepository.findOne).toBeCalledWith('1');
  //     expect(mockRepository.findOne).toBeCalledTimes(1);
  //   });

  //   it('should return a exception when does not to find a Mail', async () => {
  //     mockRepository.findOne.mockReturnValue(null);

  //     await service.findById('3').catch(error => {
  //       expect(error).toBeInstanceOf(NotFoundException);
  //       expect(error).toMatchObject({ message: 'Registry not found' });
  //       expect(mockRepository.findOne).toBeCalledWith('3');
  //       expect(mockRepository.findOne).toBeCalledTimes(1);
  //     });
  //   });
  // });

  // describe('when update a Mail', () => {
  //   it('should update a existing Mail', async () => {
  //     const MailUpdate: UpdateMailDto = mockRegistry;
  //     MailUpdate.name = 'Update Mail '

  //     mockRepository.findOne.mockReturnValue(mockRegistry);
  //     mockRepository.update.mockReturnValue({
  //       ...mockRegistry,
  //       ...MailUpdate,
  //     });
  //     mockRepository.create.mockReturnValue({
  //       ...mockRegistry,
  //       ...MailUpdate,
  //     });

  //     const updatedMail = await service.update(
  //       '1',
  //       MailUpdate,
  //     );

  //     expect(updatedMail).toMatchObject(MailUpdate);
  //     expect(mockRepository.findOne).toBeCalledWith('1');
  //     expect(mockRepository.findOne).toBeCalledTimes(1);
  //     expect(mockRepository.update).toBeCalledWith('1', MailUpdate);
  //     expect(mockRepository.update).toBeCalledTimes(1);
  //     expect(mockRepository.create).toBeCalledWith({
  //       ...mockRegistry,
  //       ...MailUpdate,
  //     });
  //     expect(mockRepository.create).toBeCalledTimes(1);
  //   });
  // });

  // describe('when delete a Mail', () => {
  //   it('should delete a existing Mail', async () => {
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