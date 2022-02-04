import { Connection } from 'mongoose';
//import { newResultSchema } from './schemas/newResult.Schema';
import { ResultSchema } from './schemas/result.schema';

export const resultsProviders = [
  {
    provide: 'RESULT_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Result', ResultSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
