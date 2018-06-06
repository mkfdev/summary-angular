import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-todo-list',
    template: `
    <ul class="list-group">
      <li class="list-group-item"
        *ngFor="let todo of (todos | todoFilter : selectedNavItem)">
        <div class="hover-anchor">
          <label class="i-checks" [for]="todo.id">
            <input type="checkbox" [id]="todo.id"
              (change)="toggleCompleted.emit(todo.id)"
              [checked]="todo.completed"><i></i>
            <span>{{todo.content}}</span>
          </label>
          <a class="hover-action text-muted" (click)="removeTodo.emit(todo.id)">
            <span class="glyphicon glyphicon-remove-circle pull-right">삭제</span>
          </a>
        </div>
      </li>
    </ul>
    `
})
export class TodoListComponent{
    @Input() todos;
    @Input() selectedNavItem;
    @Output() removeTodo = new EventEmitter();
    @Output() toggleCompleted = new EventEmitter();
}
