import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { createMask } from '@ngneat/input-mask';
import { ContentService } from 'src/app/services/content.service';
import { Router } from '@angular/router';
import { ContentRequest } from 'src/models/ContentRequest';
import { WalletAdministrativa } from 'src/models/WalletAdministrativa';
import { TransactionService } from 'src/app/services/transaction.service';
import { TransactionRequest } from 'src/models/TransactionRequest';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss']
})
export class AddContentComponent implements OnInit {
  content : any;
  contentResponse: any;
  transaction!: any;
  wallet!: string | null;
  user!: string | null;
  contentFormGroup! : FormGroup;
  contentRequest = new ContentRequest();
  transactionRequest = new TransactionRequest();
  walletAdministrativa = new WalletAdministrativa();

  submitted = false;
  currencyInputMask = createMask({
    alias: 'numeric',
    groupSeparator: ',',
    digits: 8,
    digitsOptional: false,
    prefix: '₿ ',
    placeholder: '0'
  });

  ngOnInit(): void {
    this.wallet = localStorage.getItem('wallet');
    this.user = localStorage.getItem('user');

    console.log("Wallet Administrativa: " + this.walletAdministrativa.publicKey);

    if(!this.wallet || !this.user)
    {
      this.route.navigate(['/login/user']);
    }
  }

  constructor(private formBuilder: FormBuilder,
     private toastr: ToastrService,
     private route: Router,
     private transactionService: TransactionService,
     private contentService: ContentService){

      this.contentFormGroup = this.formBuilder.group({
        title : [undefined, Validators.required],
        description : [undefined, Validators.required],
        type : ['video', Validators.required],
        url : [undefined, Validators.required],
        free : ['gratuito', Validators.required],
        price : ['price']
      });
  }

  get contentForm() { return this.contentFormGroup.controls; }

  addContent()
  {
    this.submitted = true;

    if (this.contentFormGroup.invalid) {
      return;
    }

    this.contentRequest.userCode = localStorage.getItem('user') ?? "";
    this.contentRequest.title = this.contentForm['title'].value;
    this.contentRequest.description = this.contentForm['description'].value;
    this.contentRequest.type = this.contentForm['type'].value;
    this.contentRequest.url = this.contentForm['url'].value;
    this.contentRequest.free = this.contentForm['free'].value;

    if(!this.validarURL(this.contentRequest.url))
    {
      this.toastr.warning('Url inválida!');
      return;
    }

    if(this.contentForm['free'].value === 'pago')
    {
      if(this.contentForm['price'].value === "price")
      {
        this.toastr.warning('Preço não informado!');
        return;
      }

      if(parseFloat(this.contentForm['price'].value.replace(/[^0-9.-]+/g,"")) === 0)
      {
        this.toastr.warning('Conteúdo pagos devem ter um preço!');
        return;
      }

      this.contentRequest.free = false;
      this.contentRequest.price = parseFloat(this.contentForm['price'].value.replace(/[^0-9.-]+/g,""));

      //Valor da transação para conteúdos pagos
      this.transactionRequest.value = 0.00100000;
    }
    else
    {
      this.contentRequest.free = true;
      this.contentRequest.price = 0;

      //Valor da transação para conteúdos gratuitos
      this.transactionRequest.value = 0.00010000;
    }

      this.transactionRequest.walletSender = this.wallet;
      this.transactionRequest.walletReceiver = this.walletAdministrativa.publicKey;

      this.transactionService.create(this.transactionRequest)
      .subscribe({
          next: (response) => {

            this.transaction = response;

            if(this.transaction.hash !== "SemSaldo")
            {
              this.contentRequest.transaction = this.transaction.hash;

              this.contentService.create(this.contentRequest)
                .subscribe({
                  next: (response) => {
                    this.contentResponse = response;
                    console.log("Conteúdo incluído;")
                    this.toastr.success('Conteúdo incluído com sucesso!');
                  },
                  error: (error) => {
                    console.log("Ocorreu erro na requisição de criar conteúdo:" + error)
                    this.toastr.success('Não possivel criar o conteúdo, ocorreu um erro interno!');
                  }
              })
            }
            else
            {
              this.toastr.warning('Sem saldo disponivel!');
            }
      },
        error: (error) => console.log("Ocorreu erro ao realizar a transaction:" + error)
      })
  }

  validarURL(url: string): boolean {
    const regex = /\.(gif|jpe?g|tiff?|png|webp|bmp|svg|mp4|webm|ogg|ogv|avi|mov|wmv|flv|mpg)$/i;
    const embedRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be|vimeo\.com|dailymotion\.com|vine\.co|vid\.me|tiktok\.com|facebook\.com|instagram\.com|twitter\.com|soundcloud\.com|spotify\.com|mixcloud\.com|reverbnation\.com|slideshare\.net|scribd\.com|issuu\.com|kickstarter\.com|indiegogo\.com|patreon\.com|etsy\.com|coub\.com|gfycat\.com|giphy\.com|imgur\.com)\/.+/i;
    return regex.test(url) || embedRegex.test(url);
  }
}
