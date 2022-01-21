import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateTeacherDto } from './dto/teacher.dto';
import { Teacher } from './interfaces/teacher.interface';

@Injectable()
export class TeachersService {
  constructor(@Inject('TEACHER_MODEL') private teacherModel: Model<Teacher>) {}

  async createTeacher(createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    const createTeacher = new this.teacherModel(createTeacherDto);
    return createTeacher.save();
  }

  async findAllTeacher(): Promise<Teacher[]> {
    const result = await this.teacherModel.find();
    //console.log(result, 'teacherservice');
    return result;
  }

  async findOne(username: string): Promise<Teacher> {
    //console.log(username, 'teacher service');
    const result = await this.teacherModel.findOne({ username });
    console.log(result);
    return result;
  }
}
