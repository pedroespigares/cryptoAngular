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
  cryptoData = new Array<any>();

  constructor(public datosAPI: AccesoAPIService, public auth: AuthService, public firebase: FirebaseService){}

  ngOnInit(){
    this.datosAPI.getCryptoList();
    this.getDatosOfEachCrypto();
  }

  selectMoneda(moneda: any){
    this.firebase.addCrypto(moneda);
  }

  getDatosOfEachCrypto(){
    this.firebase.datosAsociaciones.forEach((element) => {
      // this.cryptoData = new Array<any>();
      for(let i = 0; i < element.length; i++){
        this.datosAPI.getCryptoData(element[i].currencyID).subscribe((data:any) => {

          if(this.cryptoData.find((crypto:any) => crypto.id == data.id))
            return;

          this.cryptoData.push(data);
        })
      }
    });
  }
}
