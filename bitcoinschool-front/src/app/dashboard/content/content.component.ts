import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContentService } from 'src/app/services/content.service';
import { TransactionService } from 'src/app/services/transaction.service';
import { Content } from 'src/models/Content';
import { TransactionRequest } from 'src/models/TransactionRequest';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  wallet!: string | null;
  user!: string | null;
  hash!: any;
  transactionRequest = new TransactionRequest();

  @Input()
  videoSrc!: string;

  public contents: Content[] = [];

  constructor(private route: Router,
    private contentService: ContentService,
    private transactionService: TransactionService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.wallet = localStorage.getItem('wallet');
    this.user = localStorage.getItem('user');

    if(!this.wallet || !this.user)
    {
      this.route.navigate(['/login/user']);
    }

    const user = localStorage.getItem('user');

    this.contentService.getcontent(user ?? "")
        .subscribe({
          next: (response) => {
            this.contents = response
          },
          error: (error) => console.log("Ocorreu erro na requisição:" + error)
    })
  }

  comprar(item: any)
  {
    console.log('WalletSender: ' + this.wallet);
    console.log('walletReceiver:  ' + item.publicKey);
    console.log('Value: ' + item.price);

    this.transactionRequest.walletSender = this.wallet;
    this.transactionRequest.walletReceiver = item.publicKey;
    this.transactionRequest.value = item.price;

    this.transactionService.create(this.transactionRequest)
        .subscribe({
          next: (response) => {
            this.hash = response

            this.toastr.success('Conteúdo liberado com sucesso!');
          },
          error: (error) => console.log("Ocorreu erro na requisição:" + error)
    })
  }
}
