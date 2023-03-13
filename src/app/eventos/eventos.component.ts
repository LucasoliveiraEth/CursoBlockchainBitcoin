import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent {
  public eventos: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://blockchain.info/ticker')
    .subscribe(
      response => this.eventos = response,
      error => console.log(error)
    );
  }

  public getEventos(): void {
    this.eventos = [
      {
        Tema: 'Angular',
        Local: 'Rio de janeiro'
      },
      {
        Tema: 'Angular',
        Local: 'Fortaleza'
      }
    ]
  }
}
