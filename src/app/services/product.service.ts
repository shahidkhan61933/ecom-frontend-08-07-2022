import { Injectable } from "@angular/core";

import { HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProductService{

    private APIURL:string ='http://fakestoreapi.com/products';

    constructor(private httpClient:HttpClient) { }

    public getProduct():any{
       // return observable
       return this.httpClient.get(this.APIURL);
    }
}