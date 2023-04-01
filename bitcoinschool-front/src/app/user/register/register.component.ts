import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuarios } from 'src/app/models/Usuarios';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  //usuario!: Usuarios;
  usuario: any;
  returnUrl: string = "";
  registerFormGroup! : FormGroup;
  submitted = false;
  usuarioCadastrado = "";

  /**
   *
   */
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private http: HttpClient) {

      this.registerFormGroup = this.formBuilder.group({
        nome: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]]
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

    /*if(this.registerForm['email'].value == "btcschool@btcschool.com")
        this.router.navigate([this.returnUrl]);
    else
       console.log("nope" + this.registerForm['email'].value);*/
  }

}
