import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class TaskItemComponent {
  @Input() task: Task = { id: 0, description: '', completed: false };
  @Output() taskCompleted = new EventEmitter<number>();
  @Output() taskDeleted = new EventEmitter<number>();

  completeTask() {
    this.taskCompleted.emit(this.task.id);
  }

  deleteTask() {
    this.taskDeleted.emit(this.task.id);
  }
}
