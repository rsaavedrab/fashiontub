import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class OrderService {

    constructor(private http: HttpClient) { }

    getListOrder(userId) {
        return this.http.post(`${environment.host}listOrders`, {id_user_out:userId,limit:5,offset:0});
    }

    createOrder(order: any){
        return this.http.post(`${environment.host}createOrder`, order);
    }

}
