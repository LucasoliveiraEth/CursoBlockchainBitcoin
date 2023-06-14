import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { createMask } from '@ngneat/input-mask';
import { ContentService } from 'src/app/services/content.service';
import { Router } from '@angular/router';
import { ContentRequest } from 'src/models/ContentRequest';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss']
})
export class AddContentComponent implements OnInit {
  content : any;
  wallet!: string | null;
  user!: string | null;
  contentFormGroup! : FormGroup;
  contentRequest = new ContentRequest();
  contentResponse: any;
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

    if(!this.wallet || !this.user)
    {
      this.route.navigate(['/login/user']);
    }
  }

  constructor(private formBuilder: FormBuilder,
     private toastr: ToastrService,
     private route: Router,
     private contentService: ContentService){

      this.contentFormGroup = this.formBuilder.group({
        title : [undefined, Validators.required],
        description : [undefined, Validators.required],
        type : ['video', Validators.required],
        url : [undefined, Validators.required],
        free : ['gratuito', Validators.required],
        price : [undefined, Validators.required]
      });
  }

  get contentForm() { return this.contentFormGroup.controls; }

  addContent()
  {
    this.submitted = true;

     //TO-DO Realizar a Transaction
    console.log('WalletSender: ' + this.wallet);
    //TO-DO Obter PrivateKey do WalletSender
    console.log('walletReceiver: Wallet Administrativa');
    console.log('Value: ' + parseFloat(this.contentForm['price'].value.replace(/[^0-9.-]+/g,"")));

    if (this.contentFormGroup.invalid) {
      return;
    }

    this.contentRequest.userCode = localStorage.getItem('user') ?? "";
    this.contentRequest.title = this.contentForm['title'].value;
    this.contentRequest.description = this.contentForm['description'].value;
    this.contentRequest.type = this.contentForm['type'].value;
    this.contentRequest.url = this.contentForm['url'].value;
    this.contentRequest.free = this.contentForm['free'].value;

    if(this.contentForm['free'].value === 'pago')
    {
        this.contentRequest.free = false;
        this.contentRequest.price = parseFloat(this.contentForm['price'].value.replace(/[^0-9.-]+/g,""));
    }
    else
    {
      this.contentRequest.free = true;
      this.contentRequest.price = 0;
    }

    this.contentRequest.transaction = "c714a19e8dd239c3f1cb4c6beb13d270a2a8c9e5b2dc4b3fe60aa8df0c923b7e"; //this.contentForm['transaction'].value;

    this.contentService.createcontent(this.contentRequest)
        .subscribe({
          next: (response) => {
            this.contentResponse = response

            this.toastr.success('Conteúdo incluído com sucesso!');
          },
          error: (error) => console.log("Ocorreu erro na requisição:" + error)
    })
  }
}
