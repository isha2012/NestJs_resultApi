import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { CaslModule } from 'src/casl/casl.module';
import { DatabaseModule } from 'src/database/database.module';
import { newResultsProviders } from './newResult.provider';
import { ResultsConrtoller } from './results.controller';
import { resultsProviders } from './results.provider';
import { ResultsService } from './results.service';

@Module({
  imports: [DatabaseModule, CaslModule, AuthModule],
  controllers: [ResultsConrtoller],
  providers: [ResultsService, ...resultsProviders, ...newResultsProviders],
})
export class ResultsModule {}
