import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateTeacherDto } from 'src/teachers/dto/teacher.dto';
import { CreateStudentDto } from 'src/students/dto/createStudentDto';
import { TeachersService } from 'src/teachers/teachers.service';
import { StudentService } from 'src/students/students.service';
import { Teacher } from 'src/teachers/interfaces/teacher.interface';

@Injectable()
export class AuthService {
  constructor(
    private teachersService: TeachersService,
    private studentService: StudentService,
    private jwtService: JwtService,
  ) {}

  async ValidateTeacher(username: string, pass: string) {
    const teacher = await this.teachersService.findOne(username);
    //console.log('done validateTeacher');
    if (teacher && teacher.password === pass) {
      //const { password, ...result } = teacher;
      return teacher;
    }
    return null;
  }

  async ValidateStudent(username: number, pass: string) {
    const student = await this.studentService.findOne(username);
    //console.log('done validateTeacher');
    if (student && student.password === pass) {
      const { password, ...result } = student;
      return result;
    }
    return null;
  }

  async loginTeacher(createTeacherDto: CreateTeacherDto) {
    const { username, password } = createTeacherDto;
    //console.log(username);
    const result: Teacher = await this.ValidateTeacher(username, password);
    console.log('Result');
    console.log(result);
    if (result) {
      const payload: { username: string; isTeacher: boolean } = {
        username: result.username,
        isTeacher: result.isTeacher,
      };

      const access_token = await this.jwtService.sign(payload);
      return access_token;
    } else {
      throw new UnauthorizedException();
    }
  }

  async loginStudent(createStudentDto: CreateStudentDto): Promise<any> {
    const { username, password } = createStudentDto;
    const result = await this.ValidateStudent(username, password);
    console.log('result');
    if (result) {
      const payload = { username };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } else {
      throw new UnauthorizedException();
    }
  }
}
