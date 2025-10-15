import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiDataResponse } from '../../models/common/apiDataResponse';
import { ApiService } from './apiService';
import { SliderContent } from '../../models/entities/sliderContent';
import { environment } from '../../../environments/environment';
import { DataCollection } from '../../models/common/dataCollection';

@Injectable({
  providedIn: 'root'
})
export class SliderContentService implements ApiService {
  readonly baseUrl: string = `${environment.webApiUrl}/SliderContents`
  
  constructor(private httpClient : HttpClient){}

  getList() : Observable<ApiDataResponse<DataCollection<SliderContent>>>{
    return this.httpClient.get<ApiDataResponse<DataCollection<SliderContent>>>(`${this.baseUrl}`);
  }
}
