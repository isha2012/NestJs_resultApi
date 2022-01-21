import {
  Ability,
  AbilityBuilder,
  AbilityClass,
  ExtractSubjectType,
  InferSubjects,
} from '@casl/ability';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Student } from 'src/students/class/student.class';
import { Teacher } from 'src/teachers/interfaces/teacher.interface';
import { Action } from './action/action.enum';

type Subjects = InferSubjects<typeof Teacher | typeof Student> | 'all';

export type AppAbility = Ability<[Action, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
  createForUser(teacher: Teacher) {
    console.log(teacher);
    const { can, cannot, build } = new AbilityBuilder<
      Ability<[Action, Subjects]>
    >(Ability as AbilityClass<AppAbility>);

    if (teacher.isTeacher) {
      can(Action.Manage, 'all');
    } else {
      can(Action.Read, 'all');
    }

    return build({
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    });
  }
}
