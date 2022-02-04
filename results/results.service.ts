import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { newResultDto } from './dto/newResult.dto';
import { CreateResultDto } from './dto/result.dto';
import { newResult } from './interface/newResult.class';
import { Result } from './interface/result.class';

@Injectable()
export class ResultsService {
  constructor(
    @Inject('RESULT_MODEL') private resultModel: Model<Result>,
    @Inject('newRESULT_MODEL') private newResult: Model<newResult>,
  ) {}

  async createResult(createResultDto: CreateResultDto): Promise<Result> {
    const createResult = new this.resultModel(createResultDto);

    //new this.newResult(createResultDto).save();
    //await this.newResult.save(createResultDto);

    const data = (await this.resultModel.find()).forEach(async function (
      createResultDto,
    ) {
      console.log(createResultDto);
      const newTable = new this.resultModel.getSiblingDB()['newResult'].insert(
        createResultDto,
      );
      /*const newTable = new this.resultModel.insert(createResultDto);*/
      console.log(newTable);
      newTable.save();
    });

    console.log(data);

    //db.<collection_name>.find().forEach(function(d){ db.getSiblingDB('<new_database>')['<collection_name>'].insert(d); });

    return createResult.save();
  }

  async createCopy(): Promise<string> {
    const data = await this.resultModel.find();

    /*const copy = data.forEach(function (x) {
      this.newResult.insert(x).save();
    }); */

    //const copy = await this.resultModel.aggregate([{ $out: 'newResult' }]);
    //console.log(copy);
    //db.oldCollection.aggregate([{ $out: 'newCollection' }]);
    //console.log(copy);
    const copy = (await this.resultModel.find()).forEach(async function (d) {
      await this.newResult.insert(d);
    });

    //db.source_collection.find().forEach( function(doc) { db.dest_collection.insert(doc); } );

    //const copy2 = await data.getCollection([{ $out: 'newResult' }]);

    console.log(copy);
    return 'data';
  }

  async findAllresult(): Promise<Result[]> {
    return await this.resultModel.find();
  }

  async getResultByUsername(username: number): Promise<any> {
    const found = await this.resultModel.find({ username });
    return found;
  }

  async getResultById(user): Promise<any> {
    const found = await this.resultModel.find({ username: user.username });
    console.log(found);
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
