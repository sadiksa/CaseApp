import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MainComponent } from './components/main/main.component';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign'
  },
  {
    path: "sign",
    component: SignInComponent
  },
  {
    path: "main",
    component: MainComponent,
    canActivate: [UserGuard]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
