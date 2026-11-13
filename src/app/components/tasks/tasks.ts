import { Component, inject, signal } from '@angular/core';
import { TaskItem } from '../task-item/task-item';
import { AddTask } from '../add-task/add-task';
import { TaskService } from '../../services/task';
import { Task } from '../../Task';

@Component({
  imports: [TaskItem, AddTask],
  selector: 'app-tasks',
  styleUrl: './tasks.css',
  templateUrl: './tasks.html',
})
export class Tasks {
  private taskService = inject(TaskService);
  tasks = signal<Task[]>([]);

  constructor() {
    this.taskService.getTasks().subscribe((tasks) => this.tasks.set(tasks));
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks.update((tasks) => tasks.filter((t) => t.id !== task.id));
    });
  }

  toggleReminder(task: Task) {
    const updated = { ...task, reminder: !task.reminder };
    this.taskService.updateTaskReminder(updated).subscribe(() => {
      this.tasks.update((tasks) => tasks.map((t) => (t.id === task.id ? updated : t)));
    });
  }

  addTask(task: Task) {
  this.taskService.addTask(task).subscribe((newTask) => {
    this.tasks.update((tasks) => [...tasks, newTask]);
  });
}
}
