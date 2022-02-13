import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  discoDetail = [
    {
      id: 1,
      discoAuthor: "Nina Simone",
      discoName: "The best of",
      discoDetails: "Eccezionale compilation di Nina Simone",
      discoPrice: 2000,
      discoImg: "https://www.popsike.com/pix/20150302/141590921341.jpg"
    },
    {
      id: 2,
      discoAuthor: "Kraftwerk",
      discoName: "Kraftwerk 2LP-SET",
      discoDetails: "Rarissimo doppio LP krautrock dei Kraftwerk",
      discoPrice: 8000,
      discoImg: "https://www.popsike.com/pix/20141217/261704669385.jpg"
    },
    {
      id: 3,
      discoAuthor: "Depeche Mode",
      discoName: "Depeche Mode live in Frankreich",
      discoDetails: "Lo storico live di Frankreich del 1984",
      discoPrice: 2000,
      discoImg: "https://www.popsike.com/pix/20210903/324775859161.jpg"
    },
    {
      id: 4,
      discoAuthor: "David Bowie",
      discoName: "The man who sold the world",
      discoDetails: "Prima edizione Mercury Label ",
      discoPrice: 150,
      discoImg: "https://www.popsike.com/pix/20190928/283627310250.jpg"
    },
    {
      id: 5,
      discoAuthor: "Pink Floyd",
      discoName: "The wall",
      discoDetails: "Copia con autografo di tutti i 4 membri della band",
      discoPrice: 150,
      discoImg: "https://www.popsike.com/pix/20190608/293115405807.jpg"
    },
    {
      id: 6,
      discoAuthor: "Miles Davis",
      discoName: "Kind of blue",
      discoDetails: "LP del 1959 originale",
      discoPrice: 150,
      discoImg: "https://www.popsike.com/pix/20211111/194500580654.jpg"
    },
  ]
}
