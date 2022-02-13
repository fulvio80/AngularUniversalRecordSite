import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private service: OrderDetailsService,
    private title: Title,
    private meta: Meta

  ) { }
  discoData: any;

  ngOnInit(): void {
    this.discoData = this.service.discoDetail;
    /* Google SEO */
    this.title.setTitle('Pause and Play - servizi e shop');
    this.meta.addTag({name: "description", content: "Negozio online e a Roma di dischi rari e ricercati"});
    //Twitter Crawler
    this.meta.addTag({name: 'twitter:card', content: 'summary'});
    this.meta.addTag({name: 'twitter:site', content: 'https://pauseandplay.it'});
    this.meta.addTag({name: 'twitter:title', content: 'Pause and Play - servizi e shop'});
    this.meta.addTag({name: 'twitter:description', content: 'Negozio online e a Roma in via del corso dove acquistare dischi rari e ricercati' });
    this.meta.addTag({name: 'twitter:image', content: ''});
    //Facebook Crawler
    this.meta.addTag({property: 'og:title', content:'Pause and Play - servizi e shop'});
    this.meta.addTag({property: 'og:description', content:'Negozio online e a Roma in via del corso dove acquistare dischi rari e ricercati'});
    this.meta.addTag({property: 'og:img', content:''});
  }

}
