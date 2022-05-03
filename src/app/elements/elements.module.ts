import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    NavComponent,
    FooterComponent
  ],
  exports: [
    NavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ]
})
export class ElementsModule { }
