import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Game } from '../../../models/entities/game';
import { GameService } from '../../../services/rest/game-service';
import { LoadSpinnerService } from '../../../services/utils/load-spinner-service';
import { RouterLink } from '@angular/router';
import { DataCollection } from '../../../models/common/dataCollection';
import { PaginationRequest } from '../../../models/common/paginationRequest';
import { PaginationResponse } from '../../../models/common/paginationResponse';
import { Pagination } from "../../shared/pagination/pagination";

@Component({
  selector: 'app-product-list',
  imports: [RouterLink, Pagination],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit {
  gameCollection: PaginationResponse<Game>;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getListByPage(0)
  }

  getListByPage(page:number): void{
    this.gameService.getListByPage({ page: page, size: 12 }).subscribe(sub => {

      this.gameCollection = sub.data;
    })
  }
}
