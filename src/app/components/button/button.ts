import { Component,Input,Output,EventEmitter } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  imports: [NgStyle],
  selector: 'app-button',
  styleUrl: './button.css',
  templateUrl: './button.html',
})
export class Button {
  @Input() text:string="";
  @Input() color:string="";
  @Output() btnClick= new EventEmitter()

  onClick(){
    this.btnClick.emit();
  }
}
