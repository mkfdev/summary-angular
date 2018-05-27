import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-select',
  template: `
    <ul class="nav nav-pills">
        <li *ngFor="let navItem of navItems"
          [class.active]="navItem === selectedNavItem">
          <a (click)="setCurrentNavItem.emit(navItem)">{{navItem}}</a>
        </li>
    </ul>
    `
})
export class TodoSelectComponent {

    //@Input 부모 컴포넌트(http-todo)에서 자식 컴포넌트로 상태 전달
    @Input() navItems;
    @Input() selectedNavItem;

    @Output() setCurrentNavItem = new EventEmitter();

}
