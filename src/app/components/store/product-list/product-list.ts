import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Game } from '../../../models/entities/game';
import { GameService } from '../../../services/rest/game-service';
import { DataCollection } from '../../../models/common/dataCollection';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit {
  gameList : DataCollection<Game>;

  constructor(private gameService:GameService){  }

  ngOnInit(): void {
    this.gameService.getList().subscribe(sub=>{
      if(!sub.success)
        console.log(sub)
      
      this.gameList = sub.data;

      console.log(this.gameList)
    })
  }
}
