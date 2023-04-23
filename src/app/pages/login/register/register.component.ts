import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {
  }

   //usuario!: Usuarios;
   usuario: any;
   returnUrl: string = "";
   registerFormGroup! : FormGroup;
   submitted = false;
   usuarioCadastrado = "";
   inscricao = false;
   checkboxConfirmacao = false;

   constructor(private formBuilder: FormBuilder,
     private router: Router,
     private route: ActivatedRoute) {

       this.registerFormGroup = this.formBuilder.group({
         nome: ['', [Validators.required]],
         email: ['', [Validators.required, Validators.email]],
         senha: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
         checkboxConfirmacao : [undefined, Validators.required]
       });

       this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
   }

   get registerForm() { return this.registerFormGroup.controls; }

   createuser()
   {
     this.submitted = true;

     // stop here if form is invalid
     if (this.registerFormGroup.invalid) {
       return;
     }

     /*
     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

     this.usuario = this.registerFormGroup.value;
     //this.usuarioService.create(this.usuario);
     //this.http.post('https://localhost:7285/Usuarios/Create',this.usuario);

     this.http.post('https://localhost:7285/Usuarios/Create', this.usuario,
     { headers })
     .subscribe(data => {
       this.usuario = data;
       console.log(data);
     });

     this.usuarioCadastrado = "Usuário cadastrado com sucesso."
 */
     console.log("checkbox: " + this.checkboxConfirmacao);
     if(this.checkboxConfirmacao && this.registerForm['email'].value == "btcschool@btcschool.com")
         this.router.navigate([this.returnUrl]);
     else
        console.log("nope" + this.registerForm['email'].value);
   }


}
