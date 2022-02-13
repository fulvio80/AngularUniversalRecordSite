import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  

  constructor(
    private service: OrderDetailsService,
    private title: Title,
    private meta: Meta
  ) { }

  discoData: any;

  ngOnInit(): void {
    this.discoData = this.service.discoDetail;
     /* Google SEO */
     this.title.setTitle('Pause and Play - vinili rari e vintage');
     this.meta.addTag({name: "description", content: "Negozio online e a Roma di dischi rari e vintage, entro 24h il tuo vinile consegnato a casa"});
     //Twitter Crawler
     this.meta.addTag({name: 'twitter:card', content: 'summary'});
     this.meta.addTag({name: 'twitter:site', content: 'https://pauseandplay.it'});
     this.meta.addTag({name: 'twitter:title', content: 'Pause and Play - vinili rari e vintage'});
     this.meta.addTag({name: 'twitter:description', content: 'Negozio online e a Roma di dischi rari e vintage, entro 24h il tuo vinile consegnato a casa' });
     this.meta.addTag({name: 'twitter:image', content: ''});
     //Facebook Crawler
     this.meta.addTag({property: 'og:title', content:'Pause and Play - vinili rari e vintage'});
     this.meta.addTag({property: 'og:description', content:'Negozio online e a Roma di dischi rari e vintage, entro 24h il tuo vinile consegnato a casa'});
     this.meta.addTag({property: 'og:img', content:''});
  }

}
