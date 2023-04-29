import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  usuario: any;
  returnUrl: string = "";
  registerFormGroup! : FormGroup;
  submitted = false;
  usuarioCadastrado = "";
  checkboxConfirmacao = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService) {

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

     if(this.checkboxConfirmacao && this.registerForm['email'].value == "btcschool@btcschool.com")
     {
        localStorage.setItem('usuario', "usuariologado");
        this.toastr.success('Usuário cadastrado com sucesso!');
        this.router.navigate([this.returnUrl]);
     }
     else
     {
        this.toastr.error('Email deve ser do dominio btcschool.com!');
     }
  }


}
