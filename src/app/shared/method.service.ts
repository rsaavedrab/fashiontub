import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
//import { environment } from 'src/environments/environment';


@Injectable({
	providedIn: 'root'
})
export class MethodService {

    constructor(private http: HttpClient) { }

	POST(path: string, ipInput: any, contentType: string = 'application/x-www-form-urlencoded') {
		var headers_object = new HttpHeaders();
		//let accessToken = this.authService.getAccessToken();
		headers_object.append('Content-Type', contentType);
		let body: HttpParams = new HttpParams();
		body = body.append('ipInput', JSON.stringify(ipInput));
		const httpOptions = {
			headers: headers_object
		};
		console.log("Se ejecutó => ",`${environment.host}${path}`);
		return this.http.post(`${environment.host}${path}`, body, httpOptions);
	}
	GET(path: string, ipInput: any = null) {
		if (ipInput == null) {
			return this.http.get(`${environment.host}${path}`);
		}
		else {
            console.log(`${environment.host}${path}/${JSON.stringify(ipInput)}`);
            //return this.http.get(`${environment.host}${path}?ipInput=${JSON.stringify(ipInput)}`);
            return this.http.get(`${environment.host}${path}/${JSON.stringify(ipInput)}`);
		}
	}
}
