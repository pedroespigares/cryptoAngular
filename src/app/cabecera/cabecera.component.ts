import { Component, Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccesoAPIService } from '../acceso-api.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  cryptoList = new Array();
  @Output() addCrypto = new EventEmitter<string>();

  constructor(private http: HttpClient) {}

  // constructo(public datosAPI: AccesoAPIService)

  // Mandar este metodo a app
  selectCrypto(crypto:any){
    this.addCrypto.emit(crypto);
  }

  ngOnInit(){
    this.http.get("https://api.coingecko.com/api/v3/coins")
    .subscribe((data:any) => {
      this.cryptoList = data;
    })
  };
}
