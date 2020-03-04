// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../../../../core/core.module';
import { PartialsModule } from '../../../../partials/partials.module';
import { SharedModule } from '../../../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { OrderListComponent } from './order-list.component';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    CoreModule,
    RouterModule.forChild([
      {
        path: '',
        component: OrderListComponent
      },
    ]),
    SharedModule,
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  declarations: [
    OrderListComponent,
  ],	entryComponents: [
	]
})
export class OrderListModule { }
