import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccesoAPIService } from '../acceso-api.service';

@Component({
  selector: 'app-detalle-moneda',
  templateUrl: './detalle-moneda.component.html',
  styleUrls: ['./detalle-moneda.component.css']
})
export class DetalleMonedaComponent {
  id: any;
  coinData: any
  constructor(private route: ActivatedRoute, public datosAPI: AccesoAPIService) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.datosAPI.getCryptoData(this.id).subscribe((data: {}) => {
      this.coinData = data;
    });
  }
}
