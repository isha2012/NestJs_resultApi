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
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Action } from 'src/casl/action/action.enum';
import { AppAbility } from 'src/casl/casl-ability.factory';
import { CheckPolicies } from 'src/casl/checkpolicies';
import { PoliciesGuard } from 'src/casl/policiesGuard.service';
import { Teacher } from 'src/teachers/interfaces/teacher.interface';
import { CreateResultDto } from './dto/result.dto';
import { Result } from './interface/result.class';
import { ResultsService } from './results.service';

@Controller('result')
export class ResultsConrtoller {
  constructor(private resultService: ResultsService) {}

  // @UseGuards()
  @Post()
  @UseGuards(JwtAuthGuard, PoliciesGuard)
  @CheckPolicies((ability: AppAbility) => ability.can(Action.Create, Teacher))
  async createResult(
    @Body() createResultDto: CreateResultDto,
  ): Promise<Result> {
    return await this.resultService.createResult(createResultDto);
  }

  // @UseGuards(JwtAuthGuard)
  @Get()
  @UseGuards(JwtAuthGuard, PoliciesGuard)
  @CheckPolicies((ability: AppAbility) => ability.can(Action.Read, Teacher))
  async findAllResult(): Promise<Result[]> {
    return this.resultService.findAllresult();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:username')
  async getResultByUsername(
    @Param('username') username: number,
  ): Promise<Result> {
    console.log(username);
    return this.resultService.getResultByUsername(username);
  }

  @UseGuards(JwtAuthGuard)
  @Get('_id/:_id')
  async getResultById(@Param('_id') _id: string): Promise<Result> {
    return this.resultService.getResultById(_id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:username')
  async getDeleteByUsername(
    @Param('username') username: number,
  ): Promise<void> {
    return this.resultService.DeleteResult(username);
  }
}
