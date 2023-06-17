import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContentService } from 'src/app/services/content.service';
import { TransactionService } from 'src/app/services/transaction.service';
import { WalletService } from 'src/app/services/wallet.service';
import { Content } from 'src/models/Content';
import { ContentPermissionRequest } from 'src/models/ContentPermissionRequest';
import { TransactionRequest } from 'src/models/TransactionRequest';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  wallet!: string | null;
  user!: string | null;
  transaction!: any;
  transactionRequest = new TransactionRequest();
  contentPermissionRequest = new ContentPermissionRequest();
  balanceBitcoin : any;

  @Input()
  videoSrc!: string;

  public contents: Content[] = [];

  constructor(private route: Router,
    private contentService: ContentService,
    private transactionService: TransactionService,
    private toastr: ToastrService,
    private walletService: WalletService) { }

  ngOnInit(): void {
    this.wallet = localStorage.getItem('wallet');
    this.user = localStorage.getItem('user');
    const walletLogada: string = this.wallet ?? "";

    if(!this.wallet || !this.user)
    {
      this.route.navigate(['/login/user']);
    }

    this.contentService.get(this.user ?? "")
        .subscribe({
          next: (response) => {
            this.contents = response
          },
          error: (error) => console.log("Ocorreu erro na requisição:" + error)
    })

    this.walletService.balance(walletLogada)
        .subscribe({
          next: (response) => {
            this.balanceBitcoin = response
          },
          error: (error) => console.log("Ocorreu erro na requisição:" + error)
        })
  }

  comprar(item: any)
  {

    console.log('Preço + Taxa:' + item.price + 1000);

    if(this.balanceBitcoin < (item.price + 1000))
    {
      this.toastr.warning('Sem saldo suficiente para comprar este conteúdo!');
      return;
    }


    console.log('WalletSender: ' + this.wallet);
    console.log('walletReceiver:  ' + item.publicKey);
    console.log('Value: ' + item.price);


    this.transactionRequest.walletSender = this.wallet;
    this.transactionRequest.walletReceiver = item.publicKey;
    this.transactionRequest.value = item.price;

    this.transactionService.create(this.transactionRequest)
        .subscribe({
          next: (response) => {
            this.transaction = response;

            console.log('Transaction:' + this.transaction.hash);

            if(this.transaction !== undefined)
            {
              console.log('Content Id: ' + item.id);
              console.log('UserCode:' + this.user)
              console.log('Transaction:' + this.transaction)

              this.contentPermissionRequest.contentId = item.id;
              this.contentPermissionRequest.userCode = this.user;
              this.contentPermissionRequest.transaction = this.transaction.hash;

              this.contentService.createpermission(this.contentPermissionRequest)
                .subscribe({
                  next: () => {
                    this.contentService.get(this.user ?? "")
                        .subscribe({
                          next: (response) => {
                            this.contents = response
                          },
                          error: (error) => console.log("Ocorreu erro na requisição:" + error)
                    });

                    this.toastr.success('Conteúdo liberado com sucesso!');
                  },
                  error: (error) => console.log("Ocorreu erro na inserir a permissão:" + error)
              })
              console.log('Transacao Realizada: ' + this.transaction);
            }
          },
          error: (error) => console.log("Ocorreu erro ao realizar a transaction:" + error)
    })




  }
}
