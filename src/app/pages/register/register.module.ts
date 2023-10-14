import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { IConfig, NgxMaskModule } from 'ngx-mask';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';


const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation:false,
  };
}

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    RegisterRoutingModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule,
    NgxMaskModule.forRoot(maskConfigFunction),
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    CommonModule,
  ]
})
export class RegisterModule { }