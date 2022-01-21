import * as mongoose from 'mongoose';

export const StudentSchema = new mongoose.Schema({
  username: Number,
  password: String,
});
