import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  public precoBitcoin : any;
  constructor(){}
  public valorBitcoin: number = 0;
  public criptomoeda: string = "";

  addBitcoin()
  {
     this.valorBitcoin++;
  }

  delBitcoin()
  {
    this.valorBitcoin = 0;
  }

  KeyUp(event: any)
  {
    this.criptomoeda = event.target.value;
  }
}
