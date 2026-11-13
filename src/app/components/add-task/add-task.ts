import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../Task';

@Component({
  imports: [FormsModule],
  selector: 'app-add-task',
  styleUrl: './add-task.css',
  templateUrl: './add-task.html',
})
export class AddTask {
  addTask = output<Task>();

  text: string = '';
  day: string = '';
  reminder: boolean = false;

  onSubmit() {
    if (!this.text) {
      alert('Please Add Task');
      return;
    }

    this.addTask.emit({
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    });

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
