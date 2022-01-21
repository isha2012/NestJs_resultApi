import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateResultDto } from './dto/result.dto';
import { Result } from './interface/result.class';

@Injectable()
export class ResultsService {
  constructor(@Inject('RESULT_MODEL') private resultModel: Model<Result>) {}

  async createResult(createResultDto: CreateResultDto): Promise<Result> {
    const createResult = new this.resultModel(createResultDto);
    return createResult.save();
  }

  async findAllresult(): Promise<Result[]> {
    return this.resultModel.find();
  }

  async getResultByUsername(username: number): Promise<any> {
    const found = await this.resultModel.find({ username });
    return found;
  }

  async getResultById(_id: string): Promise<any> {
    const found = await this.resultModel.find({ _id });
    return found;
  }

  async DeleteResult(username: number): Promise<any> {
    const result = this.resultModel.deleteOne({ username });
    return result;
  }

  async UpdateResult(username: number): Promise<any> {
    return this.resultModel.updateOne({ username });
  }
}
