import { Component } from '@angular/core';
import { Button } from '../button/button';

@Component({
  imports: [Button],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
     title = 'Task Tracker';
     toggleAddTask(){
      console.log("Add Task");
     }
}
