// import { Test, TestingModule } from '@nestjs/testing';
// import { Create{{moduleName | toCamelCase}}Dto, Update{{moduleName | toCamelCase}}Dto } from '../dtos';
// import { fakerRegistry } from '../factory/{{moduleName | toLowerCase}}.factory';
// import { {{moduleName | toCamelCase}}Service } from '../service/{{moduleName | toLowerCase}}.service';
// import { {{moduleName | toCamelCase}}Controller } from './{{moduleName | toLowerCase}}.controller';

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});

// describe('{{moduleName | toCamelCase}}Controller', () => {
//   let controller: {{moduleName | toCamelCase}}Controller;
//   let mockRegistry: Create{{moduleName | toCamelCase}}Dto;

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
//       controllers: [{{moduleName | toCamelCase}}Controller],
//       providers: [{ provide: {{moduleName | toCamelCase}}Service, useValue: mockService }],
//     }).compile();

//     controller = module.get<{{moduleName | toCamelCase}}Controller>({{moduleName | toCamelCase}}Controller);
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

//   describe('when create {{moduleName | toCamelCase}}', () => {
//     it('should create a {{moduleName | toCamelCase}} and return it', async () => {
//       mockService.create.mockReturnValue(mockRegistry);

//       const {{moduleName | toCamelCase}}: Create{{moduleName | toCamelCase}}Dto = mockRegistry;

//       const created{{moduleName | toCamelCase}} = await controller.create({{moduleName | toCamelCase}});

//       expect(created{{moduleName | toCamelCase}}).toMatchObject(mockRegistry);
//       expect(mockService.create).toBeCalledWith({{moduleName | toCamelCase}});
//       expect(mockService.create).toBeCalledTimes(1);
//     });
//   });

//   describe('when search all {{moduleName | toCamelCase}}', () => {
//     it('should search all {{moduleName | toCamelCase}} and return them', async () => {
//       mockService.findAll.mockReturnValue([mockRegistry]);

//       const {{moduleName | toCamelCase}} = await controller.findAll();

//       expect({{moduleName | toCamelCase}}).toHaveLength(1);
//       expect({{moduleName | toCamelCase}}).toMatchObject([mockRegistry]);
//       expect(mockService.findAll).toBeCalledTimes(1);
//     });
//   });

//   describe('when search {{moduleName | toCamelCase}} by id', () => {
//     it('should find a existing {{moduleName | toCamelCase}} and return it', async () => {
//       mockService.findById.mockReturnValue(mockRegistry);

//       const {{moduleName | toCamelCase}} = await controller.findById('1');

//       expect({{moduleName | toCamelCase}}).toMatchObject(mockRegistry);
//       expect(mockService.findById).toBeCalledWith('1');
//       expect(mockService.findById).toBeCalledTimes(1);
//     });
//   });

//   describe('when update a {{moduleName | toCamelCase}}', () => {
//     it('should update a existing {{moduleName | toCamelCase}} and return it', async () => {
//       const {{moduleName | toCamelCase}}Update: Update{{moduleName | toCamelCase}}Dto = mockRegistry;
//       {{moduleName | toCamelCase}}Update.descricao = 'Update {{moduleName | toCamelCase}} '

//       mockService.update.mockReturnValue({
//         ...mockRegistry,
//         ...{{moduleName | toCamelCase}}Update,
//       });

//       const updated{{moduleName | toCamelCase}} = await controller.update(
//         '1',
//         {{moduleName | toCamelCase}}Update,
//       );

//       expect(updated{{moduleName | toCamelCase}}).toMatchObject({{moduleName | toCamelCase}}Update);
//       expect(mockService.update).toBeCalledWith(
//         '1',
//         {{moduleName | toCamelCase}}Update,
//       );
//       expect(mockService.update).toBeCalledTimes(1);
//     });
//   });

//   describe('when delete a {{moduleName | toCamelCase}}', () => {
//     it('should delete a existing {{moduleName | toCamelCase}}', async () => {
//       await controller.delete('1');

//       expect(mockService.delete).toBeCalledWith('1');
//       expect(mockService.delete).toBeCalledTimes(1);
//     });
//   });
// });