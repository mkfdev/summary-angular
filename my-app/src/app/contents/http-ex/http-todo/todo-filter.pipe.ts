import { Pipe, PipeTransform } from '@angular/core';

interface Todolist {
    id: number;
    content: string;
    completed: boolean;
}

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

  transform(todos: Todolist[], status?: String): any {
    if (!todos) return;
    
    // 필터링된 todos를 반환한다
    return todos.filter(({ completed }) => {
      switch (status) {
        case 'Active': 
          return completed === false;
        case 'Completed': 
          return completed === true;
        default: 
          return todos;
      }
    });
  }


}
 