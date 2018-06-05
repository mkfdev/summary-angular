import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Todo {
    id: number;
    content: string;
    completed: boolean;
}

@Component({
  selector: 'app-http-crud',
  templateUrl: './http-crud.component.html'
})
export class HttpCrudComponent implements OnInit {

	todos: Todo[];
	url: string = 'http://localhost:3000/todos';
	content: string;

    // HttpClient를 컴포넌트에 주입
    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.getTodos();
    }

    getTodos(){
        this.http.get<Todo[]>(this.url)
      		.subscribe(todos => this.todos = todos);
      		console.log('get');
    }

    addTodo(){
    	if(!this.content){ return; }

    	const payload = { content:this.content, completed:false };

    	this.http.post(this.url, payload)
    		.subscribe(() => this.getTodos());

    	this.content = '';
    }

    editTodo(todo){
    	const {id, completed} = todo;
    	const payload = { completed: !completed };

    	console.log(payload);

    	this.http.patch(`${this.url}/${id}`, payload)
    		.subscribe(() => this.getTodos());
    }

    deleteTodo(id){
        console.log(this.url,id);
        
    	this.http.delete(`${this.url}/${id}`)
    		.subscribe(() => this.getTodos());
    }

}
