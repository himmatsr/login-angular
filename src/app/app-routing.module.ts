import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component'
const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'profile/:id',component:ProfileComponent},
  {path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path:'', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
