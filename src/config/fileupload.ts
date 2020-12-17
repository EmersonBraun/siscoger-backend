import { HttpException } from '@nestjs/common';
import { diskStorage } from 'multer';
import { editFileName } from 'src/common/utils/file-upload.utils';

export const fileUploadConfig = (filter: (_req: any, file: { originalname: string; }, callback: (arg0: HttpException, arg1: boolean) => void) => void) => ({
  storage: diskStorage({
    destination: './upload',
    filename: editFileName,
  }),
  fileFilter: filter,
})