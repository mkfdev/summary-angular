import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpTodoComponent } from './http-todo.component';

describe('HttpTodoComponent', () => {
  let component: HttpTodoComponent;
  let fixture: ComponentFixture<HttpTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
