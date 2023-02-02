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
  intervalo = setInterval(() => {
    this.getDatosOfEachCrypto();
    // Voy a hacer que se actualice cada 5 minutos para evitar que la API me bloquee
    console.log("Actualizando datos de las criptomonedas");
  }, 300000);

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
      // Buscar la manera de que cuando se elimine una moneda de la lista, se elimine de la lista de datos
      
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
