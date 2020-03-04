import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor(private http: HttpClient) { }

    validarUsuario(user: string, password: string) {
		return this.http.post(`${environment.host}Login`, 
			{ 
				user: user, 
				password: password 
			}
		);
	}
	
	menuPorUser(idUser: number) {
		return this.http.post(`${environment.host}MenuPorUser`, 
			{ 
				idUser: idUser
			}
		);
    }
}
