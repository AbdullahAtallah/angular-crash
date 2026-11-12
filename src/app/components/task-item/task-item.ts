import { Component, input, output } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgStyle, NgClass } from '@angular/common';

@Component({
  imports: [FontAwesomeModule, NgStyle, NgClass],
  selector: 'app-task-item',
  styleUrl: './task-item.css',
  templateUrl: './task-item.html',
})
export class TaskItem {
  task = input.required<Task>();
  deleteTask = output<Task>();
  toggleReminder = output<Task>();
  faTimes = faTimes;
}
