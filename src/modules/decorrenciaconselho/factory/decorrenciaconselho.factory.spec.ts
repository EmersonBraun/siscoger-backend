import { CreateDecorrenciaConselhoDto } from '../dtos';
import { fakerRegistry } from './decorrenciaconselho.factory';

describe('DecorrenciaConselhoFactory', () => {
  it('should create a factory and return it', async () => {
    const DecorrenciaConselho: CreateDecorrenciaConselhoDto = fakerRegistry();

    expect(DecorrenciaConselho).toBe(DecorrenciaConselho);
  });
});
