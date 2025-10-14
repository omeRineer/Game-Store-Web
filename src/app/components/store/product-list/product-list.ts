import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Game } from '../../../models/entities/game';
import { GameService } from '../../../services/rest/game-service';
import { DataCollection } from '../../../models/common/dataCollection';
import { LoadSpinnerService } from '../../../services/utils/load-spinner-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit {
  gameCollection : DataCollection<Game>;

  constructor(private gameService:GameService){  }

  ngOnInit(): void {
    this.gameService.getList().subscribe(sub=>{
      
      this.gameCollection = sub.data;
    })
  }
}
