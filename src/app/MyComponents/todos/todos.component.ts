import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: Todo[];
  localItem: string;
  constructor() {
    this.localItem = localStorage.getItem('todos');
    if (this.localItem == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }

  deleteToDo(todo: Todo) {
    console.log('Deleted ' + todo.title);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addToDo(todo: Todo) {
    console.log('Added ' + todo.title);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  toggleMode(todo) {
    console.log('Togglled ' + todo.title);
    const index = this.todos.indexOf(todo);
    this.todos[index].isActive = !this.todos[index].isActive;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
