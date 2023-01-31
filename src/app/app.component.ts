import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cryptoAngular';
  selectedCryptos = new Array();

  capturarAddCrypto(crypto: string){
    this.selectedCryptos.push(crypto);
  }
}
