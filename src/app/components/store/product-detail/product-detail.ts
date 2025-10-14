import { Component, OnInit } from '@angular/core';
import { CarouselComponent, CarouselControlComponent, CarouselInnerComponent, CarouselItemComponent } from '@coreui/angular';
import { Game } from '../../../models/entities/game';
import { GameService } from '../../../services/rest/game-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [CarouselComponent, CarouselInnerComponent, CarouselItemComponent, CarouselControlComponent],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail implements OnInit {
  gameId:string;
  gameProduct:Game;
  
  constructor(private gameService:GameService, private activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe(params=>{
      this.gameId = params["id"]
    })
  }
  
  ngOnInit(): void {
    this.gameService.get(this.gameId).subscribe(res=>{
      this.gameProduct = res.data
    })
  }

}
