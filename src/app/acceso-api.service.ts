import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccesoAPIService {

  public cryptoList = new Array<any>();

  constructor(private http: HttpClient) {}

  getCryptoList(){
    this.http.get("https://api.coingecko.com/api/v3/coins/")
    .subscribe((data:any) => {
      this.cryptoList = data;
    })
  }

  getCryptoData(id: string){
    return this.http.get("https://api.coingecko.com/api/v3/coins/" + id);
  }

  getHistoricalData(id: string){
    return this.http.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=eur&days=max`);
  }
}
