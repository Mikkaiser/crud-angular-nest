import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: UserFormComponent },
  { path: 'list', component: UserListComponent },
  { path: 'update', component: UserUpdateComponent }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
