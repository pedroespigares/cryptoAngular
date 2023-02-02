import { Component, Input } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: '[app-crypto-in-table]',
  templateUrl: './crypto-in-table.component.html',
  styleUrls: ['./crypto-in-table.component.css']
})
export class CryptoInTableComponent {
  @Input() crypto: any;

  constructor(public firebase: FirebaseService) {}

  deleteCrypto(){
    this.firebase.deleteCrypto(this.crypto.id);
  }
}
