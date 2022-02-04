import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Action } from 'src/casl/action/action.enum';
import { AppAbility } from 'src/casl/casl-ability.factory';
import { CheckPolicies } from 'src/casl/checkpolicies';
import { PoliciesGuard } from 'src/casl/policiesGuard.service';
import { User } from 'src/decorators/user.decorator';
import { Teacher } from 'src/teachers/interfaces/teacher.interface';
import { CreateResultDto } from './dto/result.dto';
import { Result } from './interface/result.class';
import { ResultsService } from './results.service';

@ApiTags('Result')
@Controller('result')
export class ResultsConrtoller {
  constructor(private resultService: ResultsService) {}

  @Post()
  //@UseGuards(JwtAuthGuard, PoliciesGuard)
  //@CheckPolicies((ability: AppAbility) => ability.can(Action.Create, Teacher))
  async createResult(
    @Body() createResultDto: CreateResultDto,
  ): Promise<Result> {
    return await this.resultService.createResult(createResultDto);
  }

  @Get()
  //@UseGuards(JwtAuthGuard, PoliciesGuard)
  //@CheckPolicies((ability: AppAbility) => ability.can(Action.Read, Teacher))
  async findAllResult(): Promise<Result[]> {
    return this.resultService.findAllresult();
  }

  @Get('copyTable')
  async TableCopy(): Promise<any> {
    return this.resultService.createCopy();
  }

  //@UseGuards(JwtAuthGuard)
  @Get('/:username')
  async getResultByUsername(
    @Param('username') username: number,
  ): Promise<Result> {
    console.log(username);
    return this.resultService.getResultByUsername(username);
  }

  //@UseGuards(JwtAuthGuard)
  @Get()
  async getResultById(@User() result: Result): Promise<Result> {
    console.log('hello from user');
    return this.resultService.getResultById(result);
  }

  //@UseGuards(JwtAuthGuard)
  @Delete('/:username')
  async getDeleteByUsername(
    @Param('username') username: number,
  ): Promise<void> {
    return this.resultService.DeleteResult(username);
  }
}
