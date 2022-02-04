import { Connection } from 'mongoose';
import { newResultSchema } from './schemas/newResult.Schema';
import { ResultSchema } from './schemas/result.schema';

export const newResultsProviders = [
  {
    provide: 'NEWRESULT_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('newResult', newResultSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
