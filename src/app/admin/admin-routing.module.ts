import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EditComponent } from './edit/edit.component';
import { UserdataComponent } from './userdata/userdata.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {path:'edit/:id',component:EditComponent},
      {path:'userdata',component:UserdataComponent},
      {path:'userprofile/:id', component:UserprofileComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
