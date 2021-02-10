import { IsNotEmpty, IsString } from 'class-validator';

export class SearchPortariaDto {
  @IsString()
  @IsNotEmpty()
  cdopm: string;

  @IsString()
  @IsNotEmpty()
  portaria_numero: string;
}
