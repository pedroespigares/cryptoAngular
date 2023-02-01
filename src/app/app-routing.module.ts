import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { MonedasComponent } from './monedas/monedas.component';

const routes: Routes = [
  { path: '', component: CuerpoComponent},
  { path: 'portfolio', component: MonedasComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
