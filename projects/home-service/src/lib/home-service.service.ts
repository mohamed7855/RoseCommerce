import { Injectable } from '@angular/core';
import { HomeApi } from './Base/homeApi';
import { HttpClient } from '@angular/common/http';
import { HomeDataAdapterService } from './adapter/homeAdapter';
import { homeEndpoint } from './enums/homeData.endpoint';
import { Observable , map , catchError , of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService implements HomeApi {

  constructor(private _httpClient:HttpClient , private _HomeDataAdapterService:HomeDataAdapterService) { }

  categories():Observable<any> {
    return this._httpClient.get(  homeEndpoint.Categories ).pipe(
      map(res=>this._HomeDataAdapterService.adapt(res)),
      catchError(err=>of([err]))
    )
  }
  
}