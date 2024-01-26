import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class AddTaskComponent {
  @Output() taskAdded = new EventEmitter<string>(); // Change the type to string
  newTaskDescription = '';

  addTask() {
    if (this.newTaskDescription.trim() !== '') {
      this.taskAdded.emit(this.newTaskDescription.trim());
      this.newTaskDescription = '';
    }
  }
  
}
