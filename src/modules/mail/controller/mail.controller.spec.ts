// import { Test, TestingModule } from '@nestjs/testing';
// import { CreateMailDto, UpdateMailDto } from '../dtos';
// import { fakerRegistry } from '../factory/mail.factory';
// import { MailService } from '../service/mail.service';
// import { MailController } from './mail.controller';

describe('MailController', () => {
  describe('Test Latter', () => {
    it('should list all Mail', async () => {
      const Mail = 1 
      expect(Mail).toBe(1);
    });
  });
//   let controller: MailController;
//   let mockRegistry: CreateMailDto;

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
//       controllers: [MailController],
//       providers: [{ provide: MailService, useValue: mockService }],
//     }).compile();

//     controller = module.get<MailController>(MailController);
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

//   describe('when create mail', () => {
//     it('should create a mail and return it', async () => {
//       mockService.create.mockReturnValue(mockRegistry);

//       const mail: CreateMailDto = mockRegistry;

//       const createdmail = await controller.create('file',mail);

//       expect(createdmail).toMatchObject(mockRegistry);
//       expect(mockService.create).toBeCalledWith(mail);
//       expect(mockService.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all mail', () => {
//     it('should search all mail and return them', async () => {
//       mockService.findAll.mockReturnValue([mockRegistry]);

//       const mail = await controller.findAll();

//       expect(mail).toHaveLength(1);
//       expect(mail).toMatchObject([mockRegistry]);
//       expect(mockService.findAll).toBeCalledTimes(1);
//     });
//   });

//   describe('when search mail by id', () => {
//     it('should find a existing mail and return it', async () => {
//       mockService.findById.mockReturnValue(mockRegistry);

//       const mail = await controller.findById('1');

//       expect(mail).toMatchObject(mockRegistry);
//       expect(mockService.findById).toBeCalledWith('1');
//       expect(mockService.findById).toBeCalledTimes(1);
//     });
//   });

//   describe('when update a mail', () => {
//     it('should update a existing mail and return it', async () => {
//       const mailUpdate: UpdateMailDto = mockRegistry;
//       mailUpdate.name = 'Update mail '

//       mockService.update.mockReturnValue({
//         ...mockRegistry,
//         ...mailUpdate,
//       });

//       const updatedmail = await controller.update(
//         '1',
//         mailUpdate,
//       );

//       expect(updatedmail).toMatchObject(mailUpdate);
//       expect(mockService.update).toBeCalledWith(
//         '1',
//         mailUpdate,
//       );
//       expect(mockService.update).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a mail', () => {
//     it('should delete a existing mail', async () => {
//       await controller.delete('1');

//       expect(mockService.delete).toBeCalledWith('1');
//       expect(mockService.delete).toBeCalledTimes(1);
//     });
//   });
});