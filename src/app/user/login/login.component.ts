import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   returnUrl: string = "";
   loginForm!: FormGroup;

   constructor( private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,) {
   }

   ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

     // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }


  // convenience getter for easy access to form fields
  get modelo() { return this.loginForm.controls; }

   realizarLogin(): void
   {
      console.log("entrei");
      // stop here if form is invalid
      if (this.loginForm.invalid) {
        return;
      }

      if(this.modelo['email'].value == "btcschool")
         //console.log("btcschool");
         this.router.navigate([this.returnUrl]);
      else
         console.log("nope" + this.modelo['email'].value);

   }
}
