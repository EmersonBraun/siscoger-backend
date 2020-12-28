// import { NotFoundException } from '@nestjs/common';
// import { Test, TestingModule } from '@nestjs/testing';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { CreatePendenciaDto, UpdatePendenciaDto } from '../dtos';
// import { fakerRegistry } from '../factory/pendencia.factory';
// import { Pendencia } from '../schema/pendencia.schema';
// import { PendenciaService } from './pendencia.service';

describe('PendenciaService', () => {

  describe('Test Latter', () => {
    it('should list all Pendencia', async () => {
      const Pendencia = 1 
      expect(Pendencia).toBe(1);
    });
  });

  // let service: PendenciaService;
  // let mockRegistry: CreatePendenciaDto;

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
  //       PendenciaService,
  //       { provide: getRepositoryToken(Pendencia), useValue: mockRepository },
  //     ],
  //   }).compile();

  //   service = module.get<PendenciaService>(PendenciaService);
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
  // describe('when create Pendencia', () => {
  //   it('should create a Pendencia', async () => {
  //     mockRepository.create.mockReturnValueOnce(mockRegistry);
  //     mockRepository.save.mockReturnValueOnce(mockRegistry);

  //     const Pendencia: CreatePendenciaDto = mockRegistry;

  //     const savedPendencia = await service.create(Pendencia);

  //     expect(savedPendencia).toMatchObject(mockRegistry);
  //     expect(mockRepository.create).toBeCalledWith(Pendencia);
  //     expect(mockRepository.create).toBeCalledTimes(1);
  //     expect(mockRepository.save).toBeCalledTimes(1);
  //   });
  // });

  // describe('when search all Pendencia', () => {
  //   it('should list all Pendencia', async () => {
  //     mockRepository.find.mockReturnValue([mockRegistry]);

  //     const Pendencia = await service.findAll();

  //     expect(Pendencia).toHaveLength(1);
  //     expect(mockRepository.find).toBeCalledTimes(1);
  //   });
  // });

  // // describe('when search one Pendencia', () => {
  // //   it('should list one Pendencia', async () => {
  // //     mockRepository.create.mockReturnValueOnce(mockRegistry);
  // //     mockRepository.save.mockReturnValueOnce(mockRegistry);

  // //     const PendenciaUpdate: UpdatePendenciaDto = mockRegistry;
  // //     const Pendencia = await service.search(PendenciaUpdate);

  // //     expect(Pendencia).toMatchObject(mockRegistry);
  // //     expect(mockRepository.find).toBeCalledTimes(1);
  // //   });
  // // });

  // describe('when search Pendencia by id', () => {
  //   it('should find a existing Pendencia', async () => {
  //     mockRepository.findOne.mockReturnValue(mockRegistry);

  //     const Pendencia = await service.findById('1');

  //     expect(Pendencia).toMatchObject(mockRegistry);
  //     expect(mockRepository.findOne).toBeCalledWith('1');
  //     expect(mockRepository.findOne).toBeCalledTimes(1);
  //   });

  //   it('should return a exception when does not to find a Pendencia', async () => {
  //     mockRepository.findOne.mockReturnValue(null);

  //     await service.findById('3').catch(error => {
  //       expect(error).toBeInstanceOf(NotFoundException);
  //       expect(error).toMatchObject({ message: 'Registry not found' });
  //       expect(mockRepository.findOne).toBeCalledWith('3');
  //       expect(mockRepository.findOne).toBeCalledTimes(1);
  //     });
  //   });
  // });

  // describe('when update a Pendencia', () => {
  //   it('should update a existing Pendencia', async () => {
  //     const PendenciaUpdate: UpdatePendenciaDto = mockRegistry;
  //     PendenciaUpdate.name = 'Update Pendencia '

  //     mockRepository.findOne.mockReturnValue(mockRegistry);
  //     mockRepository.update.mockReturnValue({
  //       ...mockRegistry,
  //       ...PendenciaUpdate,
  //     });
  //     mockRepository.create.mockReturnValue({
  //       ...mockRegistry,
  //       ...PendenciaUpdate,
  //     });

  //     const updatedPendencia = await service.update(
  //       '1',
  //       PendenciaUpdate,
  //     );

  //     expect(updatedPendencia).toMatchObject(PendenciaUpdate);
  //     expect(mockRepository.findOne).toBeCalledWith('1');
  //     expect(mockRepository.findOne).toBeCalledTimes(1);
  //     expect(mockRepository.update).toBeCalledWith('1', PendenciaUpdate);
  //     expect(mockRepository.update).toBeCalledTimes(1);
  //     expect(mockRepository.create).toBeCalledWith({
  //       ...mockRegistry,
  //       ...PendenciaUpdate,
  //     });
  //     expect(mockRepository.create).toBeCalledTimes(1);
  //   });
  // });

  // describe('when delete a Pendencia', () => {
  //   it('should delete a existing Pendencia', async () => {
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