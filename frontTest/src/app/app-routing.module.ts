import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { FormUsersComponent } from './components/form-users/form-users.component';
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },

  {
    path: '',
    component: ListUsersComponent,
  },

  {
    path: 'create',
    component: FormUsersComponent,
  },
  {
    path: 'update/:id',
    component: FormUsersComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
