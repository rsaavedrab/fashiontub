// Angular
import { Injectable } from '@angular/core';
// RxJS
import { BehaviorSubject, throwError } from 'rxjs';
// Object path
import * as objectPath from 'object-path';
// Services
import { MenuConfigService } from './menu-config.service';
import { FacadeService } from '../../../../shared/patterns/facade.service';
import { catchError, map } from 'rxjs/operators';


@Injectable()
export class MenuAsideService {
	// Public properties
	menuList$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

	/**
	 * Service constructor
	 *
	 * @param menuConfigService: MenuConfigService
	 */
	constructor(private menuConfigService: MenuConfigService, private fs: FacadeService) {
		this.loadMenu();
	}

	/**
	 * Load menu list
	 */
	loadMenu() {
		// get menu list
		// const menuItems: any[] = objectPath.get(this.menuConfigService.getMenus(), 'aside.items');
		// this.menuList$.next(menuItems);
		// let userInfo = null;

		// if (localStorage.getItem("userInfo") != null) {
		// 	userInfo = JSON.parse(localStorage.getItem("userInfo"));

		// 	console.log(userInfo.id_user);
		// 	this.fs.usuarioService.menuPorUser(userInfo.id_user).subscribe((data: any)=> {
		// 		this.menuList$.next(data);
		// 	});
		// }
		
	}
}
