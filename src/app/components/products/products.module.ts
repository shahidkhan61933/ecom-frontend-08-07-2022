import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { CartComponent } from './cart/cart.component';
import { ReviewComponent } from './review/review.component';



@NgModule({
  declarations: [
    ProductsComponent,
    CreateComponent,
    ViewComponent,
    ListComponent,
    CartComponent,
    ReviewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
