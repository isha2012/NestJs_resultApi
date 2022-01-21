import * as mongoose from 'mongoose';

export const TeacherSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
  isTeacher: { type: Boolean, default: true },
});
