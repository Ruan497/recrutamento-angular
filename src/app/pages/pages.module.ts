import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {RoutingModule} from './routing.module'
import { ElementsModule } from '../elements/elements.module';
import { FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent
  ],
  exports: [
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    ElementsModule,
    FlexLayoutModule
  ]
})
export class PagesModule { }
