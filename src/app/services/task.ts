import { Service } from '@angular/core';
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';
import { Observable, of } from 'rxjs';

@Service()
export class TaskService {
  getTasks(): Observable<Task[]> {
    return of(TASKS);
  }
}
