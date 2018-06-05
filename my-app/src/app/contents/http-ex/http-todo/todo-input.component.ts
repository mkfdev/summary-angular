import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  template: `
    <input class="form-control"
    placeholder="What needs to be done?"
    autofocus
    [(ngModel)]="content" (keyup.enter)="addTodoEmit()">

    <pre>{{ todos | json }}</pre>
  `
})
export class TodoInputComponent{
    content: string;
    //자식 컴포넌트 -> 부모 컴포넌트로 상태 전달
    //@Output() 이벤트명 = new EvnetEmitter();
    @Output() addTodo = new EventEmitter();

    addTodoEmit(){
        if(this.content){
            //this.이벤트명.emit();
            this.addTodo.emit(this.content);
            this.content='';
        }
    }
}



