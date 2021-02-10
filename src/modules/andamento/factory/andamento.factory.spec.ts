import { CreateAndamentoDto } from '../dtos';
import { fakerRegistry } from './andamento.factory';

describe('AndamentoFactory', () => {
  it('should create a factory and return it', async () => {
    const Andamento: CreateAndamentoDto = fakerRegistry();

    expect(Andamento).toBe(Andamento);
  });
});
