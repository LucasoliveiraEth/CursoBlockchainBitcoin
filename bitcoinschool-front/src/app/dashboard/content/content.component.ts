import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from 'src/app/services/content.service';
import { Content } from 'src/models/Content';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  wallet!: string | null;
  user!: string | null;

  @Input()
  videoSrc!: string;

  public contents: Content[] = [];

  constructor(private route: Router,
    private contentService: ContentService) { }

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
    console.log('Preço do item:' + item.price + ". Dono: " + item.userName);
  }
}
