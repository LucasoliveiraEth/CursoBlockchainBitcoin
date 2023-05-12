import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { WalletService } from 'src/app/services/wallet.service';
import { WalletRequest } from 'src/models/WalletRequest';
import { Wallet } from 'src/models/Wallet';
import { HttpHeaders } from '@angular/common/http';

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
  request = new WalletRequest();
  wallet = new Wallet();
  seedPhrase: Array<string> | undefined
  count: number | undefined;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private walletService: WalletService) {

      console.log("Wallet" + this.wallet);
      this.registerFormGroup = this.formBuilder.group({
        password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
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

     this.request.Password = this.registerForm['password'].value;

     if(this.checkboxConfirmacao && this.registerForm['password'].value != "")
     {
        this.walletService.create(this.request)
        .subscribe({
          next: (response) => {
            this.wallet = response
            this.seedPhrase = this.wallet.seedPhrase.split(' ').filter((x) => x);
            console.log("Wallet: " + this.wallet.publicKey);
          },
          error: (error) => console.log("Ocorreu erro na requisição:" + error)
        })

        //localStorage.setItem('wallet', this.wallet.publicKey);
        //this.toastr.success('Usuário cadastrado com sucesso!');
        //this.router.navigate([this.returnUrl]);
     }
     else
     {
        this.toastr.error('Você deve concordar com os termos!');
     }
  }

  confirmUser()
  {
    localStorage.setItem('wallet', this.wallet.publicKey);
    this.toastr.success('Usuário cadastrado com sucesso!');
    this.router.navigate([this.returnUrl]);
  }
}
