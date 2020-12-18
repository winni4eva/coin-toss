import { Component, OnDestroy, OnInit } from '@angular/core';
import { AssetsService } from './assets.service';
import { environment } from '../../environments/environment';
import { SocketService } from '../@shared/socket/socket.service';
import { tap, map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit, OnDestroy {

  activeCoin;
  rates: Array<any> = [];
  assets: Array<any> = [];
  icons: Array<any> = [];
  coinChangesSubscription: any;
  liveData$: any;
  COIN_ASSETS = 'COIN_ASSETS';
  COIN_ICONS = 'COIN_ICONS';

  constructor(
    private _assetService: AssetsService,
    private _socketService: SocketService
  ) { 
    // this._socketService.connect();
    // this._socketService.sendMessage(
    //   {
    //     "type": "hello",
    //     "apikey": environment.coinKey,
    //     "heartbeat": false,
    //     "subscribe_data_type": ["trade"],
    //     "subscribe_filter_symbol_id": [
    //       "BITSTAMP_SPOT_BTC_USD$",
    //       "BITFINEX_SPOT_BTC_LTC$",
    //       "COINBASE_",
    //       "ITBIT_"
    //       ]
    //   }
    // );
    // this.liveData$ = this._socketService.messages$.pipe(
    //   map(rows => console.log('Socket Data', rows)),
    //   catchError(error => { throw error }),
    //   tap({
    //     error: error => console.log('[Coin Socket] Error:', error),
    //     complete: () => console.log('[Coin Socket] Connection Closed')
    //   })
    // );
  }

  ngOnInit(): void {
    const icons = localStorage.getItem(this.COIN_ICONS);
    const assets = localStorage.getItem(this.COIN_ASSETS); 
    if (!icons) {
      this.getAssetIcons();
    } else {
      this.icons = JSON.parse(icons);
    }

    if (!assets) {
      this.getAssets();
    } else {
      this.assets = JSON.parse(assets);
    }
  }

  getAssets() {
    this._assetService.getAssets()
      .subscribe(
        (response: any) => {
          this.assets = response;
          localStorage.setItem(this.COIN_ASSETS, JSON.stringify(response.slice(0, 100)));
          //this.getRates();
        },
        error => console.error(error)
      );
  }

  getRates(asset = 'BTC') {
    this._assetService.getRates(asset)
      .subscribe(
        (response: any) => {
          const { asset_id_base, rates } = response;
          this.activeCoin = asset_id_base;
          this.rates = rates;
        },
        error => console.error(error)
      );
  }

  getAssetIcons() {
    this._assetService.getAssetIcons()
      .subscribe(
        (response: any) => {
          this.icons = response;
          localStorage.setItem(this.COIN_ICONS, JSON.stringify(response.slice(0, 100)));
        },
        error => console.error(error)
      );
  }

  getAssetRates(asset) {
    this.getRates(asset);
  }

  ngOnDestroy() {
    // if (this.coinChangesSubscription) {
    //   this.coinChangesSubscription.unsubscribe();
    // }
  }

}
