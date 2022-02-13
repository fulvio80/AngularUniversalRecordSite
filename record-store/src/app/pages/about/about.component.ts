import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {
     /* Google SEO */
     this.title.setTitle('Pause and Play - la nostra storia');
     this.meta.addTag({name: "description", content: "La storia del primo negozio online e a Roma di dischi rari e vintage"});
     //Twitter Crawler
     this.meta.addTag({name: 'twitter:card', content: 'summary'});
     this.meta.addTag({name: 'twitter:site', content: 'https://pauseandplay.it'});
     this.meta.addTag({name: 'twitter:title', content: 'Pause and Play - la nostra storia'});
     this.meta.addTag({name: 'twitter:description', content: 'La storia del primo negozio online e a Roma di dischi rari e vintage' });
     this.meta.addTag({name: 'twitter:image', content: ''});
     //Facebook Crawler
     this.meta.addTag({property: 'og:title', content:'Pause and Play - la nostra storia'});
     this.meta.addTag({property: 'og:description', content:'La storia del primo negozio online e a Roma di dischi rari e vintage'});
     this.meta.addTag({property: 'og:img', content:''});
  }

}
