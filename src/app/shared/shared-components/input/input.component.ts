import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() control = new FormControl();
  @Input() type = 'text';
  @Input() id = ''
  @Input() for =''
  @Input() label = ''
  constructor() { }

  ngOnInit(): void {
  }
  getErrors(err:string){
    return this.control.errors?.[err]
  }
  getField(){
    return this.control
  }
}
