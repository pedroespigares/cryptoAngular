import { Component, Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccesoAPIService } from '../acceso-api.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  @Output() addCrypto = new EventEmitter<string>();


  constructor(public datosAPI: AccesoAPIService){}

  // Mandar este metodo a app

  selectCrypto(crypto:any){
    this.addCrypto.emit(crypto);
  }

  ngOnInit(){
    this.datosAPI.getCryptoList();
  };
}
