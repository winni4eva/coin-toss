import { Component, OnDestroy, OnInit } from '@angular/core';
import { AssetsService } from './assets.service';
import { environment } from '../../environments/environment';
import { SocketService } from '../@shared/socket/socket.service';
import { tap, map, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../@store/models/app-state.model';
import { AssetItem } from '../@store/models/asset.model';
import { FavouriteItem } from '../@store/models/favourites.model';
import { AddFavouriteAction } from '../@store/actions/favourites.actions';
import { ToastService } from '../@shared/toast/toast.service';
import { LoadingAssetAction } from '../@store/actions/asset.actions';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit, OnDestroy {

  //activeCoin;
  //rates: Array<any> = [];
  assets$: Observable<Array<AssetItem>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>
  //icons: Array<any> = [];
  //coinChangesSubscription: any;
  //liveData$: any;
  //COIN_ASSETS = 'COIN_ASSETS';
  //COIN_ICONS = 'COIN_ICONS';

  constructor(
    private _assetService: AssetsService,
    private _socketService: SocketService,
    private store: Store<AppState>,
    private _toast: ToastService
  ) { 
    //this.assets$ = this.store.select(store => store.asset);
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
    this.assets$ = this.store.select(store => store.asset.list);
    this.loading$ = this.store.select(store => store.asset.loading);
    this.error$ = this.store.select(store => store.asset.error);

    this.store.dispatch(new LoadingAssetAction());
  }

  onAssetSelect(event) {
    this.addFavouriteAsset(event);
  }

  addFavouriteAsset(asset: FavouriteItem) {
    //const favourites$: Observable<Array<FavouriteItem>> = this.store.select(store => store.favourite);
    //favourites$.subscribe(favourites => {
      //const matchedAsset = favourites.some(
        //({asset_id}) =>  asset_id === asset.asset_id
      //);
      //if (matchedAsset) {
        //this._toast.showInfo(`You have already selected ${asset.name} as a favourite`);
      //} else {
        this.store.dispatch(new AddFavouriteAction(asset));
        this._toast.showInfo(`${asset.name} has been added as a favourite`);
      //}
   // });
  }

  // getRates(asset = 'BTC') {
  //   this._assetService.getRates(asset)
  //     .subscribe(
  //       (response: any) => {
  //         const { asset_id_base, rates } = response;
  //         //this.activeCoin = asset_id_base;
  //         //this.rates = rates;
  //       },
  //       error => console.error(error)
  //     );
  // }

  // getAssetIcons() {
  //   this._assetService.getAssetIcons()
  //     .subscribe(
  //       (response: any) => {
  //         this.icons = response;
  //         localStorage.setItem(this.COIN_ICONS, JSON.stringify(response.slice(0, 100)));
  //       },
  //       error => console.error(error)
  //     );
  // }

  // getAssetRates(asset) {
  //   this.getRates(asset);
  // }

  ngOnDestroy() {
    // if (this.coinChangesSubscription) {
    //   this.coinChangesSubscription.unsubscribe();
    // }
  }

}
