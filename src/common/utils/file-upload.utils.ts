/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpException, HttpStatus } from '@nestjs/common';
import { extname } from 'path';

export const PDFFileFilter = (
  _req: unknown,
  file: { originalname: string },
  callback: (arg0: HttpException, arg1: boolean) => void,
) => {
  if (!file.originalname.match(/\.(pdf)$/)) {
    return callback(
      new HttpException(
        'Only PDF files are allowed!',
        HttpStatus.UNPROCESSABLE_ENTITY,
      ),
      false,
    );
  }
  callback(null, true);
};

export const imageFileFilter = (
  _req: any,
  file: { originalname: string },
  callback: (arg0: HttpException, arg1: boolean) => void,
) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return callback(
      new HttpException(
        'Only image files are allowed!',
        HttpStatus.UNPROCESSABLE_ENTITY,
      ),
      false,
    );
  }
  callback(null, true);
};

export const editFileName = (
  _req: any,
  file: { originalname: string },
  callback: (arg0: any, arg1: string) => void,
) => {
  const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  const randomName = Array(4)
    .fill(null)
    .map(() => Math.round(Math.random() * 10).toString(10))
    .join('');
  callback(null, `${name}${randomName}${fileExtName}`);
};
