// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../../../../core/core.module';
import { PartialsModule } from '../../../../../partials/partials.module';
import { OrdersComponent } from './orders.component';
import { SharedModule } from '../../../../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    CoreModule,
    RouterModule.forChild([
      {
        path: '',
        component: OrdersComponent
      },
    ]),
    SharedModule,
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  declarations: [
    OrdersComponent,
  ],	entryComponents: [
	]
})
export class OrdersModule { }
