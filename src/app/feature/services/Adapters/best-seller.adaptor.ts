import { Injectable } from '@angular/core';
import { IAdapter } from '../../models/iadapter';
import { IProduct } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class BestSellerAdaptor implements IAdapter {

  constructor() { }
  Adapt(data: any) : IProduct [] {
    return data.bestSeller;
  }
}
