import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { FacadeService } from '../../../../../../shared/patterns/facade.service';

@Component({
  selector: 'kt-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})

export class OrdersComponent implements OnInit {
  orderForm: FormGroup;
  items: FormArray;
  services = [];
  itemSelected = [];

  constructor(private formBuilder: FormBuilder, private fs: FacadeService) { }

  ngOnInit(): void {

    this.fs.maestraService.listsOrderForControls().subscribe((data: any) => {
        this.services = data[0].getordercontrol[0].service;
    });

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    let userInfo = null;

    if (localStorage.getItem("userInfo") != null) {
      userInfo = JSON.parse(localStorage.getItem("userInfo"));
    }

    this.orderForm = this.formBuilder.group({
      iduser: userInfo.id_user,
      orderDate: mm + '/' + dd + '/' + yyyy,
      userName: userInfo.user,
      firstName: userInfo.name,
      lastName: userInfo.name,
      additionalInformation: ''
    });
  }

  addItem(id: number, event) {
    this.itemSelected.push(id);
  }

  Save() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    let userName = this.orderForm.get("userName").value;
    let idUser = this.orderForm.get("iduser").value;
    let additionalInformation = this.orderForm.get("additionalInformation").value;

    var unique = this.itemSelected.filter(function (elem, index, self) {
      return index === self.indexOf(elem);
    });

    let infoOrder = {
      "id_user": idUser,
      "user_creation": userName,
      "order_detail": {
        "subject": "",
        "details": additionalInformation,
        "date_order_detail": yyyy + '/' + mm + '/' + dd,
      },
      "order_service": []
    }

    unique.forEach((a, b) => {
      infoOrder.order_service.push({
        "id_service": a
      })
    })

    this.fs.orderService.createOrder(infoOrder).subscribe(data=>{
      alert("Su orden ha sido enviada a FashionTub Company!!!")
    })
  }
}
