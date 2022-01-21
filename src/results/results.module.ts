import { Module } from '@nestjs/common';
import { CaslModule } from 'src/casl/casl.module';
import { DatabaseModule } from 'src/database/database.module';
import { ResultsConrtoller } from './results.controller';
import { resultsProviders } from './results.provider';
import { ResultsService } from './results.service';

@Module({
  imports: [DatabaseModule, CaslModule],
  controllers: [ResultsConrtoller],
  providers: [ResultsService, ...resultsProviders],
})
export class ResultsModule {}
