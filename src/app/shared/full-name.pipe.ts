import { Pipe, PipeTransform } from '@angular/core';

export interface UserPipe {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
}

@Pipe({
  name: 'fullName',
})
export class FullNamePipe implements PipeTransform {
  transform(
    value: UserPipe,
    mode?: 'uppercase' | 'lowercase',
    ...args: unknown[]
  ): unknown {


    const result = value.lastName + ' ' + value.firstName;

    if (mode === 'uppercase') {
      return result.toUpperCase();
    }

    return result;
  }
}