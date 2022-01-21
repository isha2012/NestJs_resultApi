import { Body, Controller, Post } from '@nestjs/common';
import { CreateTeacherDto } from 'src/teachers/dto/teacher.dto';
import { CreateStudentDto } from 'src/students/dto/createStudentDto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login/teacher')
  async loginTeacher(@Body() createTeacherDto: CreateTeacherDto) {
    //console.log(createTeacherDto, 'authcontroller');
    return this.authService.loginTeacher(createTeacherDto);
  }

  @Post('/login/student')
  async loginStudent(@Body() createStudentDto: CreateStudentDto) {
    //console.log(createStudentDto, 'authcontroller');
    return await this.authService.loginStudent(createStudentDto);
  }
}
