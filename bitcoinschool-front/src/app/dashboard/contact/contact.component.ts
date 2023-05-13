import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  wallet!: string | null;
  @Input()
  videoSrc!: string;

  public contents = [
    {
      id: 1,
      name: 'Exemplo de vídeo Responsivo do Vimeo',
      type: 'video',
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/YfTrGkatr2A?list=PL1jfYGaIL3SNDDEJ6dnLC_L44Z5Eh7KmE'),
      permission: false
    },
    {
      id: 2,
      name: 'Conteúdo 2',
      type: 'image',
      url: 'https://bitcoinschool.net.br/assets/images/logo-bitcoin-school-144x68.png',
      permission: true
    },
    {
      id: 3,
      name: 'Exemplo de vídeo Responsivo do Vimeo',
      type: 'video',
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/YfTrGkatr2A?list=PL1jfYGaIL3SNDDEJ6dnLC_L44Z5Eh7KmE'),
      permission: true
    },
    // adicionar mais conteúdos aqui
  ];

  constructor(private route: Router,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.wallet = localStorage.getItem('wallet');

    if(!this.wallet)
    {
      this.route.navigate(['/login/user']);
    }
  }


}
