import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateStudentDto } from './dto/createStudentDto';
import { Student } from './class/student.class';

@Injectable()
export class StudentService {
  constructor(@Inject('STUDENT_MODEL') private studentModel: Model<Student>) {}

  async createStudent(createStudentDto: CreateStudentDto): Promise<Student> {
    const createStudent = new this.studentModel(createStudentDto);
    return createStudent.save();
  }

  async findAllStudents(): Promise<Student[]> {
    const result = await this.studentModel.find();
    console.log(result, 'studentService');
    return result;
  }

  async findOne(username: number): Promise<Student> {
    console.log(username, 'student service');
    const result = await this.studentModel.findOne({ username });
    console.log(result);
    return result;
  }

  async getResultById(username: number): Promise<any> {
    const found = await this.studentModel.find({ username });
    console.log(found);
  }
}
