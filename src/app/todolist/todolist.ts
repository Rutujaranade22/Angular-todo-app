import { Component } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 @Component({
  selector: 'app-todolist',
  imports: [CommonModule, FormsModule],
  templateUrl: './todolist.html',
  styleUrl: './todolist.css'
})
export class Todolist {
   newTask: string = '';
  tasks: { id: number; title: string; completed: boolean }[] = [];

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ id: Date.now(), title: this.newTask, completed: false });
      this.newTask = '';
    }
  }

  toggleTask(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.completed = !task.completed;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
}
