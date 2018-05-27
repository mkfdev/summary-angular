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
	
	//부모 컴포넌트(http-todo)로 상태를 전달 
	//emit()함수로 이벤트 발생시켜 상태 저달
	@Output() addTodo = new EventEmitter();

	addTodoEmit(){
		if(this.content){
		  this.addTodo.emit(this.content);
		  this.content='';
		}
	}
}
