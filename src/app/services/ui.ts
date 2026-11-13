import { Service, signal } from '@angular/core';

@Service()
export class Ui {
  showAddTask = signal(false);

  toggleAddTask() {
    this.showAddTask.update((show) => !show);
  }
}
