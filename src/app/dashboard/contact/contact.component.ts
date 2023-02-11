import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  public valorBitcoin: number = 0;
  public urlImage: string = "https://bitcoinschool.net.br/assets/images/logo-bitcoin-school-144x68.png"
  public criptomoeda: string = "";

  addSatoshi()
  {
     this.valorBitcoin++;
     console.log(this.valorBitcoin);
  }

  delSatoshi()
  {
    this.valorBitcoin = 0;
  }

  KeyUp(event: any)
  {
    this.criptomoeda = event.target.value;
  }

}
