import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateTeacherDto } from './dto/teacher.dto';
import { Teacher } from './interfaces/teacher.interface';
import { TeachersService } from './teachers.service';

@Controller('teachers')
export class TeachersController {
  constructor(private teachersService: TeachersService) {}

  @Post('signUp')
  async createTeacher(
    @Body() createTeacherDto: CreateTeacherDto,
  ): Promise<Teacher> {
    return this.teachersService.createTeacher(createTeacherDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getTeachers(): Promise<Teacher[]> {
    return this.teachersService.findAllTeacher();
  }
}
