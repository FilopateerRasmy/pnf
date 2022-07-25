import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimengComponentsModule } from 'src/app/primeng-components/primeng-components.module';



@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimengComponentsModule
  ],
  exports:[
    InputComponent,
    ReactiveFormsModule,

  ]
})
export class SharedComponentsModule { }
