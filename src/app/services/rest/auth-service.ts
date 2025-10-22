import { Injectable } from '@angular/core';
import { ApiService } from './apiService';
import { environment } from '../../../environments/environment';
import { LoginRequest } from '../../models/auth/loginRequest';
import { Observable } from 'rxjs';
import { LoginResponse } from '../../models/auth/loginResponse';
import { HttpClient } from '@angular/common/http';
import { ApiDataResponse } from '../../models/common/apiDataResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements ApiService {
  readonly baseUrl: string = `${environment.authApiUrl}/auth`

  constructor(private httpClient : HttpClient){
  }
  
  login(data:LoginRequest) : Observable<ApiDataResponse<LoginResponse>>{
    return this.httpClient.post<ApiDataResponse<LoginResponse>>(`${this.baseUrl}/login`, data)
  }
}
