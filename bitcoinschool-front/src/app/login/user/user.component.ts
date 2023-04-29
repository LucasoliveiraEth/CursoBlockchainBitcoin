import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  returnUrl: string = "";
  loginFormGroup! : FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute){

    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get loginForm() { return this.loginFormGroup.controls; }

  realizarLogin(): void
  {
    this.submitted = true;

    if (this.loginFormGroup.invalid) {
      return;
    }

    if(this.loginForm['email'].value == "btcschool@btcschool.com")
    {
      localStorage.setItem('usuario', "usuariologado");
      this.router.navigate([this.returnUrl]);
    }
    else
      console.log("email não encontrado:" + this.loginForm['email'].value);
    }

}
