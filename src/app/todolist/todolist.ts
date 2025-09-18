import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule
  ],
  templateUrl: './todolist.html',
  styleUrl: './todolist.css'
})
export class Todolist {
  newTask: string = '';
  tasks: { id: number; title: string; completed: boolean }[] = [];
  filterIndex: number = 0; // 0 = All, 1 = Active, 2 = Completed

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

  get filteredTasks() {
    if (this.filterIndex === 1) {
      return this.tasks.filter(t => !t.completed); // Active
    } else if (this.filterIndex === 2) {
      return this.tasks.filter(t => t.completed);  // Completed
    }
    return this.tasks; // All
  }
}
