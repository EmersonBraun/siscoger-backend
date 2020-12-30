
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisCacheModule } from '../cache/redis-cache.module';
import { AdlController } from './controller/adl.controller';
import { Adl } from './entity/adl.entity';
import { AdlService } from './service/adl.service';

@Module({
  imports: [TypeOrmModule.forFeature([Adl]), RedisCacheModule],
  providers: [AdlService],
  controllers: [AdlController],
  exports: [AdlService]
})
export class AdlModule {}
