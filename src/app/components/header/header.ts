import { Component, inject } from '@angular/core';
import { Button } from '../button/button';
import { Ui } from '../../services/ui';

@Component({
  imports: [Button],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  title = 'Task Tracker';
  protected ui = inject(Ui);
}
