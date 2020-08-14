import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { UserdataComponent } from './userdata/userdata.component';
import { EditComponent } from './edit/edit.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminComponent, UserdataComponent, EditComponent, UserprofileComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ],
})
export class AdminModule { }
