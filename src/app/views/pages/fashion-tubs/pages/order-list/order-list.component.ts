import { Component, OnInit } from '@angular/core';
import { FacadeService } from '../../../../../shared/patterns/facade.service';

@Component({
  selector: 'kt-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  constructor(private fs: FacadeService) { }

  orderList = [];

  ngOnInit() {

    if (localStorage.getItem("userInfo") != null) {
			let userInfo = JSON.parse(localStorage.getItem("userInfo"));

			this.fs.orderService.getListOrder(userInfo.id_user).subscribe((data: any)=> {
				this.orderList = data[0].getorderbyuserout[0].order_detail;
			});
		}
    
  }

}
