import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';
import { CaslModule } from './casl/casl.module';
import { ResultsModule } from './results/results.module';

@Module({
  imports: [
    // AuthModule,
    TeachersModule,
    StudentsModule,
    // CaslModule,
    ResultsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
