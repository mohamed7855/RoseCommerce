import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ProductsAdapter } from '../Adapters/products.adapter';
import { map, Observable } from 'rxjs';
import { IProduct } from '../../models/product';
import { RoseEndPoints } from '../Enums/roseAPIs.EndPoints';
import { BestSellerAdaptor } from '../Adapters/best-seller.adaptor';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private _httpClient : HttpClient ,
    private _productsAdapter : ProductsAdapter ,
    private _bestSellerAdaptor:BestSellerAdaptor ,
    @Inject(PLATFORM_ID) private platformId: any
  ) { }

  
  loadFlowbite(callback: (flowbite: any) => void) {
    if (isPlatformBrowser(this.platformId)) {
      import('flowbite').then(flowbite => {
        callback(flowbite);
      });
    }
  }
  getProducts() : Observable<IProduct[] | any>{
    return this._httpClient.get(`${RoseEndPoints.AllProduct}`).pipe(
      map((res:any)=> this._productsAdapter.Adapt(res))
    )
  }

  getBestSeller() : Observable<IProduct[] | any>{
    return this._httpClient.get(`${RoseEndPoints.BestSeller}`).pipe(
      map((res:any)=> this._bestSellerAdaptor.Adapt(res))
    )
  }
}
