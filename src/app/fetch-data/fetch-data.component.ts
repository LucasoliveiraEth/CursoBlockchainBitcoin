import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent implements OnInit {

  public valor = 0;
  public price = 50200.55;
  constructor() { }

  ngOnInit() {

/*
    setInterval(() => {
      this.valor++;

      if(this.valor==100)
         this.valor=0;

    }, 1000);*/
  }

}


