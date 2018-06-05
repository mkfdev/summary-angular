import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContentsComponent } from './contents/contents.component';
import { Ex01Component } from './contents/ex01/ex01.component';
import { HttpExComponent } from './contents/http-ex/http-ex.component';
import { HttpCrudComponent } from './contents/http-ex/http-crud/http-crud.component';
import { HttpTodoComponent } from './contents/http-ex/http-todo/http-todo.component';
import { TodoInputComponent } from './contents/http-ex/http-todo/todo-input.component';
import { TodoSelectComponent } from './contents/http-ex/http-todo/todo-select.component';
import { TodoListComponent } from './contents/http-ex/http-todo/todo-list.component';
import { TodoFilterPipe } from './contents/http-ex/http-todo/todo-filter.pipe';
import { TodoFooterComponent } from './contents/http-ex/http-todo/todo-footer.component';
import { StyleControlComponent } from './contents/style-control/style-control.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentsComponent,
    Ex01Component,
    HttpExComponent,
    HttpCrudComponent,
    HttpTodoComponent,
    TodoInputComponent,
    TodoSelectComponent,
    TodoListComponent,
    TodoFilterPipe,
    TodoFooterComponent,
    StyleControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
