import { Injectable, Injector } from '@angular/core';
import { UserService } from '../services/user.service';
import { OrderService } from '../services/order.service';
import { MaestraService } from '../services/maestra.service';

@Injectable({
    providedIn: 'root'
  })
  export class FacadeService {
    constructor(private injector: Injector) { }
    private _usuarioService: UserService;
    private _maestraService: MaestraService;
    private _orderService: OrderService;

    public get usuarioService(): UserService {
      if (!this._usuarioService) {
        this._usuarioService = this.injector.get(UserService);
      }
      return this._usuarioService;
    }

    public get maestraService(): MaestraService {
      if (!this._maestraService) {
        this._maestraService = this.injector.get(MaestraService);
      }
      return this._maestraService;
    }

    public get orderService(): OrderService {
      if (!this._orderService) {
        this._orderService = this.injector.get(OrderService);
      }
      return this._orderService;
    }
  }