import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  title: string;
  description: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  onSubmit() {
    const todo: Todo = {
      sno: 100,
      title: this.title,
      description: this.description,
      isActive: true,
    };

    this.todoAdd.emit(todo);
  }
}
