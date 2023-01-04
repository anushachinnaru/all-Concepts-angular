import { Pipe, PipeTransform } from '@angular/core';
import { employee } from './pipe/pipe.component';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  // transform(value: Array<employee>, name: string) {
  //   console.log(value, 'value', name);
  //   if (name == '') return value;

  //   console.log(
  //     value.filter((emp: any) => {
  //       emp.firstName.startsWith(name);
  //     })
  //   );

  //   return value.filter((emp: employee) => {
  //     emp.firstName.startsWith(name);
  //     //console.log(emp.firstName.startsWith(name));
  //   });
  // }

  transform(value: any, name: string) {
    if (name === '') {
      return value;
    }
    return value.filter((employee: employee) => {
      return employee.firstName.startsWith(name);
    });
  }
}
