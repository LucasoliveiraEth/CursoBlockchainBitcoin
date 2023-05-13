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
      usuario: '@btcschool',
      titulo: 'Hora de Fugir do Dólar?',
      name: 'Olá, pessoal! Nesta live super interessante, vamos falar sobre um tema que tem impacto direto na economia brasileira: macroeconomia e o dólar.Para ajudar a entender melhor esses temas, teremos a participação especial do especialista em macroeconomia Roberto Morra da Genial Investimentos, que vai nos ajudar a entender as tendências do mercado, a relação entre o dólar e a economia brasileira e os impactos das políticas macroeconômicas no cenário atual.Durante a transmissão, vamos discutir sobre as causas e consequências da volatilidade do dólar no mercado brasileiro, as estratégias de proteção cambial para empresas e investidores, as perspectivas para a economia brasileira e os desafios que o país enfrenta em meio à crise econômica mundial.',
      type: 'video',
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/vukRobY1zs8?list=PL1jfYGaIL3SM0SjWYgOjltW_FX8Trv_7X'),
      permission: false
    },
    {
      id: 2,
      usuario: '@btcschool',
      titulo: 'AULAS COM ESPECIALISTAS.Teórico & Prático.',
      name: 'Blockchain & Criptomoeda. Desde os fundamentos da tecnologia até as aplicações práticas, nossos cursos abrangem todos os aspectos da área que mais inova no mundo.',
      type: 'image',
      url: 'https://promocao.btcschool.com.br/wp-content/uploads/2023/05/caio-carlos.png',
      permission: true
    },
    {
      id: 3,
      usuario: '@btcschool',
      titulo: 'BITPOD - Ep 01 - Bastidores do Mercado de Evento Web3 com Márcio Costa (Rio Cripto Day)',
      name: 'O BITPOD é um PodCast transmitido ao vivo da sede da bitcoin school e criado para dar voz a projetos e criadores Web3.Teremos como hosts o nosso querido cofundador @caiodemattos e nossa estrela @joeyponzi3 e, claro, contaremos sempre com convidados pra lá de especiais! E para o primeiro episódio da série teremos, ninguém mais, ninguém menos do que o idealizador do evento @riocriptoday, Márcio Costa, contando tudo sobre os bastidores do mercado de eventos web3 além de informações que farão você repensar seus investimentos! 😉',
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
