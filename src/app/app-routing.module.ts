import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { MonedasComponent } from './monedas/monedas.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: CuerpoComponent},
  { path: 'portfolio', component: MonedasComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
