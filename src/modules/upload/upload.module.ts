import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UploadController } from './controller/upload.controller';
import { Upload, UploadSchema } from './schema/upload.schema';
import { UploadService } from './service/upload.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Upload.name, schema: UploadSchema }])],
  providers: [UploadService],
  controllers: [UploadController],
})
export class UploadModule {}
