import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { teachersProvider } from 'src/teachers/teachers.providers';
import { CaslAbilityFactory } from './casl-ability.factory';

@Module({
  imports: [DatabaseModule],
  providers: [CaslAbilityFactory, ...teachersProvider],
  exports: [CaslAbilityFactory],
})
export class CaslModule {}
