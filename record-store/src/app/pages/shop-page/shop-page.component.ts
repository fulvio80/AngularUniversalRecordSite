import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';




@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit {

  constructor(
    private param: ActivatedRoute,
    private service: OrderDetailsService
  ) { }
  
  getShopId: any;
  shopData: any;

  ngOnInit(): void {
    this.getShopId = this.param.snapshot.paramMap.get('id');
    console.log(this.getShopId, 'getShop');
    if(this.getShopId) {
      this.shopData = this.service.discoDetail.filter((value) => {
       return value.id == this.getShopId
      });
      console.log(this.shopData)
    }
  }

}
