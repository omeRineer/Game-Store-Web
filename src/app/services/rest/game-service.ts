import { inject, Injectable } from '@angular/core';
import { ApiDataResponse } from '../../models/common/apiDataResponse';
import { Game } from '../../models/entities/game';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { PaginationResponse } from '../../models/common/paginationResponse';
import { ApiService } from './apiService';
import { PaginationRequest } from '../../models/common/paginationRequest';

@Injectable({
  providedIn: 'root'
})
export class GameService implements ApiService {
  readonly baseUrl: string = `${environment.webApiUrl}/Games`;

  constructor(private httpClient : HttpClient){
  }
  

  getListByPage(paginationBody:PaginationRequest): Observable<ApiDataResponse<PaginationResponse<Game>>>{
    return this.httpClient.post<ApiDataResponse<PaginationResponse<Game>>>(this.baseUrl, paginationBody)
  }

  get(id:string): Observable<ApiDataResponse<Game>>{
    return this.httpClient.get<ApiDataResponse<Game>>(`${this.baseUrl}/${id}`)
  }
}
