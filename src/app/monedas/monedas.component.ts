import { Component } from '@angular/core';
import { AccesoAPIService } from '../acceso-api.service';
import { AuthService } from '../auth.service';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-monedas',
  templateUrl: './monedas.component.html',
  styleUrls: ['./monedas.component.css'],
})
export class MonedasComponent {
  page = 1;
  pageSize = 10;

  constructor(public datosAPI: AccesoAPIService, public auth: AuthService, public firebase: FirebaseService){}

  ngOnInit(){
    this.datosAPI.getCryptoList();
  }

  selectMoneda(moneda: any, event: any){
    this.firebase.addCrypto(moneda);
    event.target.classList.add('selected');
  }

  deleteMoneda(moneda: any){
    this.firebase.deleteCrypto(moneda.id);
  }
}
