import * as mongoose from 'mongoose';

export const newResultSchema = new mongoose.Schema({
  //_id: mongoose.Schema.Types.ObjectId,
  username: Number,
  result: {
    physics: Number,
    chemistry: Number,
    maths: Number,
  },
});
