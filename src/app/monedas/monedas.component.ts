import { Component } from '@angular/core';
import { AccesoAPIService } from '../acceso-api.service';

@Component({
  selector: 'app-monedas',
  templateUrl: './monedas.component.html',
  styleUrls: ['./monedas.component.css']
})
export class MonedasComponent {
  monedas = new Array<any>();
  constructor(public datosAPI: AccesoAPIService){}

  ngOnInit(){
    this.monedas = this.datosAPI.cryptoList;
  };
}
