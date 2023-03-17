import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   returnUrl: string = "";
   loginFormGroup!: FormGroup;
   submitted = false;

   constructor( private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,) {
   }

   ngOnInit() {
    /*this.loginFormGroup = this.formBuilder.group({
      email: ['', Validators.nullValidator],
      password: ['', Validators.required]
    });*/

    this.loginFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(10)])
   });

     // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }


  // convenience getter for easy access to form fields
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
         //console.log("btcschool");
          this.router.navigate([this.returnUrl]);
      else
         console.log("nope" + this.loginForm['email'].value);

   }
}
