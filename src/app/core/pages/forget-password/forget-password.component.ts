import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../../../feature/components/input/input.component';
import { AuthService } from 'auth';
import { TokenService } from '../../services/token/token.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forget-password',
  imports: [
    ReactiveFormsModule, InputComponent ,CommonModule
  ],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {

  isForgetpassSign : boolean = true;
  isCodeSign : boolean = false;
  isConfirmpassSign : boolean = false;
  email !: string;

    forgetpasswordForm: FormGroup = new FormGroup({
      email: new FormControl(null, Validators.required),
    });

    resetCodeForm: FormGroup = new FormGroup({
        resetCode: new FormControl(null, Validators.required),
      });

    newPasswordForm: FormGroup = new FormGroup({     
      email: new FormControl(null, Validators.required),
      newPassword: new FormControl(null, Validators.required),
      rePassword: new FormControl(null, Validators.required),
    },{
      validators :this.validateRePassword
    });
  
    constructor(
      private _AuthService: AuthService,
      private _tokenService: TokenService,
      private _router: Router
    ) {}
  
    validateRePassword(forgetpassword : any) : any{

      let passwordControl = forgetpassword.get("newPassword").value;
      let rePasswordControl = forgetpassword.get("rePassword").value;
    
      if(passwordControl == rePasswordControl){
        return ;
      }else{
        rePasswordControl.setErrors({rePasswordNotMatch :"Password and Repassword should be matched"});
    
        return {rePasswordNotMatch :"Password and Repassword should be matched"};
      }
    }
    forgetpassword(form : FormGroup) {
      console.log(form.value)
      form.get('email')?.patchValue(this.email);
      if(form.valid){
        console.log(form.value)
        form.removeControl('rePassword');
        console.log(form.value)
        this._AuthService.forgetPassword(form.value).subscribe((res) => {
          console.log(res);
          this._router.navigate(['/'])

        });
      }
     
    }

    ForgetpassSign(form : FormGroup){
     
      this.email = form?.value.email;
      console.log(this.email)

       this._AuthService.forgetPassword(form.value).subscribe((res) => {
        console.log(res);
        this.isForgetpassSign = false;
        this.isCodeSign = true;
        this.isConfirmpassSign = false;
        
      });
      
    }

    CodeSign(form : FormGroup){
      this.isForgetpassSign = false;
      this.isCodeSign = false;
      this.isConfirmpassSign = true;
      this._AuthService.verifyCode(form.value).subscribe((res) => {
        console.log(res);
      });
    }


    resendEmail(){
      this.isForgetpassSign = true;
      this.isCodeSign = false;
      this.isConfirmpassSign = false;
    }
}
