import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TeachersController } from './teachers.controller';
import { teachersProvider } from './teachers.providers';
import { TeachersService } from './teachers.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TeachersController],
  providers: [TeachersService, ...teachersProvider],
  exports: [TeachersService],
})
export class TeachersModule {}
