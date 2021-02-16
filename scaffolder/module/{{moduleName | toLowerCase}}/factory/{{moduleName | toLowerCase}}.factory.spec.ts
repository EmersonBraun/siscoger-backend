// // import { Test, TestingModule } from '@nestjs/testing';
// import { Create{{moduleName | toCamelCase}}Dto } from '../dtos';
// import { fakerRegistry } from './{{moduleName | toLowerCase}}.factory'

describe('Test Latter', () => {
  it('-', () => {
    const a = 1;
    expect(a).toBe(1);
  });
});
// describe('{{moduleName | toCamelCase}}Factory', () => {
//   it('should create a factory and return it', async () => {
//     const {{moduleName | toCamelCase}}: Create{{moduleName | toCamelCase}}Dto = fakerRegistry();

//     expect({{moduleName | toCamelCase}}).toBe({{moduleName | toCamelCase}})
//   });
// });
