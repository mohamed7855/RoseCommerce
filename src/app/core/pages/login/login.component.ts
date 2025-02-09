import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token/token.service';
import { AuthService } from 'auth';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(
    private _AuthService: AuthService,
    private _tokenService: TokenService,
    private _router: Router
  ) {}

  login() {
    this._AuthService.login(this.loginForm.value).subscribe((res) => {
      this._tokenService.setToken('123456789');
      this._router.navigate(['/faqs']);
    });
  }
}
