import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  returnUrl: string = "";
  loginFormGroup! : FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute){

    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get loginForm() { return this.loginFormGroup.controls; }

  realizarLogin(): void
  {
    this.submitted = true;
     console.log("entrei");
     // stop here if form is invalid
     if (this.loginFormGroup.invalid) {
       return;
     }

     if(this.loginForm['email'].value == "btcschool@btcschool.com")
         this.router.navigate([this.returnUrl]);
     else
        console.log("nope" + this.loginForm['email'].value);

  }


}
