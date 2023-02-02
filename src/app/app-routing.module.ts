import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { MonedasComponent } from './monedas/monedas.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DetalleMonedaComponent } from './detalle-moneda/detalle-moneda.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: CuerpoComponent},
  { path: 'portfolio', component: MonedasComponent, canActivate: [AuthGuard]},
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'coin/:id', component: DetalleMonedaComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthService, AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
