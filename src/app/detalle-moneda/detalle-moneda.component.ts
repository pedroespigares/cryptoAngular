import { Component, AfterViewInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccesoAPIService } from '../acceso-api.service';

@Component({
  selector: 'app-detalle-moneda',
  templateUrl: './detalle-moneda.component.html',
  styleUrls: ['./detalle-moneda.component.css']
})
export class DetalleMonedaComponent implements AfterViewInit{
  id: any;
  coinData: any
  dataPoints: any = []
  chartOptions:any;
  chart: any;
  dataForPoints: any;

  constructor(private route: ActivatedRoute, public datosAPI: AccesoAPIService) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.datosAPI.getCryptoData(this.id).subscribe((data: {}) => {
      this.coinData = data;
      console.log(this.coinData);
      this.dataForPoints = {
        '1y': this.getPriceWithPercentageChange(this.coinData.market_data.price_change_percentage_1y_in_currency.eur),
        '200d': this.getPriceWithPercentageChange(this.coinData.market_data.price_change_percentage_200d_in_currency.eur),
        '60d': this.getPriceWithPercentageChange(this.coinData.market_data.price_change_percentage_60d_in_currency.eur),
        '30d': this.getPriceWithPercentageChange(this.coinData.market_data.price_change_percentage_30d_in_currency.eur),
        '14d': this.getPriceWithPercentageChange(this.coinData.market_data.price_change_percentage_14d_in_currency.eur),
        '7d': this.getPriceWithPercentageChange(this.coinData.market_data.price_change_percentage_7d_in_currency.eur),
        '24h': this.getPriceWithPercentageChange(this.coinData.market_data.price_change_percentage_24h_in_currency.eur),
        '1h': this.getPriceWithPercentageChange(this.coinData.market_data.price_change_percentage_1h_in_currency.eur),
        'Actual': this.coinData.market_data.current_price.eur,
      }

      for (let key in this.dataForPoints) {
        this.dataPoints.push({
          label: key,
          y: this.dataForPoints[key]
        });
      }
    });


    this.chartOptions = {
      theme: "dark2",
      zoomEnabled: true,
      backgroundColor: "#0C0E12",
      title: {
        text:"",
        fontColor: "#F2BC07",
        margin: 40,
      },
      subtitles: [{
        text: "Loading Data...",
        fontSize: 24,
        horizontalAlign: "center",
        verticalAlign: "center",
        dockInsidePlotArea: true
      }],
      axisY: {
        title: "Historical price (in EUR)",
        titleFontColor: "#F2BC07",
        titleFOntSize: 24,
        suffix: "€"
      },
      data: [{
        lineColor: "#F2BC07",
        markerColor: "#F2BC07",
        markerSize: 12,
        type: "line",
        name: "Closing Price",
        yValueFormatString: "€#,###.00",
        dataPoints: this.dataPoints
      }]
    }
  }

  getChartInstance(chart: object) {
    this.chart = chart;
  }

  ngAfterViewInit() {
    this.chartOptions.subtitles[0].text = "";
    this.chartOptions.title.text = this.coinData.name + " Historical Price";
    this.chartOptions.data.name = this.coinData.name + " Historical Price";
    this.chart.render();
  }

  // El metodo getPriceWithPercentageChange devuelve el precio actual de la moneda + el porcentaje de cambio que le pasemos como parametro

  getPriceWithPercentageChange(percentage:number) {
    return this.coinData.market_data.current_price.eur + (this.coinData.market_data.current_price.eur * percentage / 100);
  }
}
