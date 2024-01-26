import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task.model';
import { FormsModule } from '@angular/forms';
import { TaskItemComponent } from "../task-item/task-item.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css'],
    standalone: true,
    imports: [FormsModule, TaskItemComponent, CommonModule]
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Output() taskCompleted = new EventEmitter<number>();
  @Output() taskDeleted = new EventEmitter<number>();

  completeTask(id: number) {
    this.taskCompleted.emit(id);
  }

  deleteTask(id: number) {
    this.taskDeleted.emit(id);
  }
}
