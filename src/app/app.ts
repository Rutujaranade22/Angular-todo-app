import { Component } from '@angular/core';
 import { Todolist } from './todolist/todolist';
  @Component({
  selector: 'app-root',
  imports: [Todolist],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'todo-app';
}
 