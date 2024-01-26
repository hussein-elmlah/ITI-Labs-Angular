import { Component, OnInit } from '@angular/core';
import { Task } from './task.model';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from "./add-task/add-task.component";
import { TaskListComponent } from "./task-list/task-list.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [FormsModule, AddTaskComponent, TaskListComponent]
})

  export class AppComponent implements OnInit {
    [x: string]: any;
    tasks: Task[] = [];
  
    tasksCounter: number = 0;
  
    ngOnInit() {
      // Load tasks from local storage during component initialization
      this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      // Determine the counter value based on the loaded tasks
      this.tasksCounter = this.tasks.length > 0 ? Math.max(...this.tasks.map(task => task.id)) : 0;
    }
  
    addTask(description: string) {
      const newTask: Task = {
        id: ++this.tasksCounter,
        description,
        completed: false
      };
      this.tasks.push(newTask);
      this.saveTasksToLocalStorage();
    }
  
    completeTask(id: number) {
      const task = this.tasks.find(t => t.id === id);
      if (task) {
        task.completed = !task.completed;
        this.saveTasksToLocalStorage();
      }
    }
  
    deleteTask(id: number) {
      this.tasks = this.tasks.filter(t => t.id !== id);
      this.saveTasksToLocalStorage();
    }
  
    private saveTasksToLocalStorage() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }