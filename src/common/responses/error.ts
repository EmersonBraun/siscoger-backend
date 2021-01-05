import { ApiProperty } from '@nestjs/swagger';

export default class ErrorResponse {
  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  message: string;

  @ApiProperty()
  error: string;

  @ApiProperty()
  data: [];
}
