import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnewayComponent } from './oneway/oneway.component';
import { PropertyComponent } from './property/property.component';
import { StylebindComponent } from './stylebind/stylebind.component';
import { ClassbindComponent } from './classbind/classbind.component';
import { EventbindComponent } from './eventbind/eventbind.component';
import { TwowayComponent } from './twoway/twoway.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OnewayComponent,
    PropertyComponent,
    StylebindComponent,
    ClassbindComponent,
    EventbindComponent,
    TwowayComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
})
export class DataModule { }
