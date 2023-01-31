import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccesoAPIService {

  public cryptoList = new Array();

  constructor(private http: HttpClient) {}

  getCryptoList(){
    this.http.get("https://api.coingecko.com/api/v3/coins")
    .subscribe((data:any) => {
      this.cryptoList = data;
    })
  }
}
