import { Connection } from 'mongoose';
import { TeacherSchema } from './schemas/teacher.schema';

export const teachersProvider = [
  {
    provide: 'TEACHER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Teacher', TeacherSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
