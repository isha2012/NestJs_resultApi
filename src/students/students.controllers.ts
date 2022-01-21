import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CreateStudentDto } from './dto/createStudentDto';
import { Student } from './class/student.class';
import { StudentService } from './students.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Post('signup')
  async createStudent(
    @Body() createStudentDto: CreateStudentDto,
  ): Promise<Student> {
    return this.studentService.createStudent(createStudentDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAllStudent(): Promise<Student[]> {
    return await this.studentService.findAllStudents();
  }
}
