import { Component, inject } from '@angular/core';
import { Task } from '../../Task';
import { TaskItem } from '../task-item/task-item';
import { TaskService } from '../../services/task';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  imports: [TaskItem],
  selector: 'app-tasks',
  styleUrl: './tasks.css',
  templateUrl: './tasks.html',
})
export class Tasks {
  private taskService = inject(TaskService);
  tasks = toSignal(this.taskService.getTasks(), { initialValue: [] });
}
