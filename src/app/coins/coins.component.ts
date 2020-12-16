import { Component, OnInit } from '@angular/core';
import { CoinsService } from './coins.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})
export class CoinsComponent implements OnInit {

  activeCoin;
  rates: Array<any> = [];
  assets: Array<any> = [];

  constructor(private _coinService: CoinsService) { }

  ngOnInit(): void {
    this.getAssets();
  }

  getAssets() {
    this._coinService.getAssets()
      .subscribe(
        (response: any) => {
          this.assets = response;
          this.getRates();
        },
        error => console.error(error)
      );
  }

  getRates(asset = 'BTC') {
    this._coinService.getRates(asset)
      .subscribe(
        (response: any) => {
          const { asset_id_base, rates } = response;
          this.activeCoin = asset_id_base;
          this.rates = rates;
        },
        error => {
          console.error(error);
        }
      );
  }

  getAssetRates(asset) {
    this.getRates(asset);
  }

}
