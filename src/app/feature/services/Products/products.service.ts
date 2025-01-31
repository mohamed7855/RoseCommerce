import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsAdapter } from '../Adapters/products.adapter';
import { map, Observable } from 'rxjs';
import { IProduct } from '../../models/product';
import { RoseEndPoints } from '../Enums/roseAPIs.endPoints';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private _httpClient : HttpClient ,
    private _productsAdapter : ProductsAdapter ,
  ) { }

  getProducts() : Observable<IProduct[] | any>{
    return this._httpClient.get(`${RoseEndPoints.AllProduct}`).pipe(
      map((res:any)=> this._productsAdapter.Adapt(res))
    )
  }
}
