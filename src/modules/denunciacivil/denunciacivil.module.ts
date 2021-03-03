import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DenunciaCivilController } from './controller/denunciacivil.controller';
import DenunciaCivil from './entity/denunciacivil.entity';
import { DenunciaCivilService } from './service/denunciacivil.service';

@Module({
  imports: [TypeOrmModule.forFeature([DenunciaCivil])],
  providers: [DenunciaCivilService],
  controllers: [DenunciaCivilController],
  exports: [DenunciaCivilService],
})
export class DenunciaCivilModule {}
