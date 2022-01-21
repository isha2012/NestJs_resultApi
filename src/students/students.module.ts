import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { StudentController } from './students.controllers';
import { studentProvider } from './students.provider';
import { StudentService } from './students.service';

@Module({
  imports: [DatabaseModule],
  controllers: [StudentController],
  providers: [StudentService, ...studentProvider],
  exports: [StudentService],
})
export class StudentsModule {}
