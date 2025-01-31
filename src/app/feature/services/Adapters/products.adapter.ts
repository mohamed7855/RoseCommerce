import { Injectable } from '@angular/core';
import { IAdapter } from '../../models/iadapter';
import { IProduct } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsAdapter implements IAdapter {

  constructor() { }
  Adapt(data: any) : IProduct[] {
    return data.products;
  }
}
