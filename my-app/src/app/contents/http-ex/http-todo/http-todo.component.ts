import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Todolist {
    id: number;
    content: string;
    completed: boolean;
}

@Component({
  selector: 'app-http-todo',
  templateUrl: './http-todo.component.html',
  styleUrls: ['./http-todo.component.css']
})
export class HttpTodoComponent implements OnInit {

    todos: Todolist[];
    url: string = 'http://localhost:3000/todolist';
    content: string;

    // navigation items
    navItems = ['All', 'Active', 'Completed'];
    // 선택된 navigation item
    selectedNavItem: string;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.getTodos(); 
        this.selectedNavItem = this.navItems[0];
    }

    getTodos(){
        this.http.get<Todolist[]>(this.url)
            .subscribe(todos => this.todos = todos);
    }

    addTodo(content: string) {
        // const id: number = this.todos.length ? this.lastTodoId() : 1;
        const newTodo = { id: this.lastTodoId(), content, completed: false };

        this.http.post(this.url, newTodo)
            .subscribe(() => this.todos = [newTodo, ...this.todos]);
    }

    private lastTodoId(): number {
        return this.todos.length ? Math.max(...this.todos.map(({ id }) => id)) + 1 : 1;
    }

    setCurrentNavItem(selectedNavItem: string) {
        this.selectedNavItem = selectedNavItem;
    }

    removeTodo(id: number) {
        // https://github.com/angular/angular/issues/18396
        this.http.delete(`${this.url}/id/${id}`, { responseType: 'text' })
          .subscribe(() => this.todos = this.todos.filter(todo => todo.id !== id));
    }

    toggleComplete(id: number) {
        const { completed } = this.todos.find(todo => todo.id === id);
        const payload = { completed: !completed };

        this.http.patch(`${this.url}/id/${id}`, payload, { responseType: 'text' })
            .subscribe(() => this.todos = this.todos.map(todo => {
            return todo.id === id ? Object.assign(todo, { completed: !completed }) : todo;
        }));
    }

    removeCompletedTodos() {
        this.http.delete(`${this.url}/completed`, { responseType: 'text' })
          .subscribe(() => this.todos = this.todos.filter(todo => !todo.completed));

        // this.todos = this.todos.filter(todo => todo.completed !== true);
      }

    toggleAllTodo(completed: boolean) {
    this.http.patch(`${this.url}`, { completed }, { responseType: 'text' })
      .subscribe(() => this.todos = this.todos.map(todo => {
        return Object.assign(todo, { completed });
      }));

    // this.todos = this.todos.map(todo => Object.assign(todo, { completed }));
    }


} 
