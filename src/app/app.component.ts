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
    let exists = false;
    this.selectedCryptos.find((element) => {
      if(element == crypto){
        exists = true;
      }
    })
    
    if(!exists){
      this.selectedCryptos.push(crypto);
    }
  }
}
