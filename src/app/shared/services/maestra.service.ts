import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
    providedIn: 'root'
})

export class MaestraService {

    constructor(private http: HttpClient) { }

    listsOrderForControls() {
        return this.http.get(`${environment.host}ListsOrderForControls`);
    }
}
