import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContentService } from 'src/app/services/content.service';
import { TransactionService } from 'src/app/services/transaction.service';
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

      this.contentService.get(this.user ?? "")
          .subscribe({
            next: (response) => {
              this.contents = response
          },
            error: (error) => console.log("Ocorreu erro na requisição:" + error)
          })
  }

  comprar(item: any)
  {
    this.transactionRequest.walletSender = this.wallet;
    this.transactionRequest.walletReceiver = item.publicKey;
    this.transactionRequest.value = item.price;

    this.transactionService.create(this.transactionRequest)
      .subscribe({
          next: (response) => {
            this.transaction = response;

            if(this.transaction.hash !== "SemSaldo")
            {
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
                              error: (error) => console.log("Ocorreu erro na requisição de obter:" + error)
                        });
                    this.toastr.success('Conteúdo liberado com sucesso!');
                },
                  error: (error) => console.log("Ocorreu erro na inserir a permissão:" + error)
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
}

