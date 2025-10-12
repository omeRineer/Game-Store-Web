import { inject, Injectable } from '@angular/core';
import { ApiDataResponse } from '../../models/common/apiDataResponse';
import { Game } from '../../models/entities/game';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { DataCollection } from '../../models/common/dataCollection';
import { ApiService } from './apiService';

@Injectable({
  providedIn: 'root'
})
export class GameService implements ApiService {
  readonly baseUrl: string = `${environment.webApiUrl}/Games`;

  constructor(private httpClient : HttpClient){
  }
  

  getList(): Observable<ApiDataResponse<DataCollection<Game>>>{
    return this.httpClient.get<ApiDataResponse<DataCollection<Game>>>(this.baseUrl)
  }

  get(id:string): Observable<ApiDataResponse<Game>>{
    return this.httpClient.get<ApiDataResponse<Game>>(`${this.baseUrl}/${id}`)
  }
}
