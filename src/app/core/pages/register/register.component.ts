import { Component, Output, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from 'auth';
import { InputComponent } from '../../../feature/components/input/input.component';
import { RouterLink } from '@angular/router';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, InputComponent ,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {

  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    phone: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    rePassword: new FormControl(null, Validators.required),
    gender: new FormControl('male', Validators.required),
  });

  constructor(private _AuthService: AuthService) {}

  register() {
    this._AuthService.register(this.registerForm.value).subscribe((res) => {
      console.log(res);
    });

  }

 
}
