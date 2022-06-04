import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  sno!: number
  title!: string
  desc!: string
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const todo={
      sno: this.sno,
      title: this.title,
      desc:this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
  }

}
