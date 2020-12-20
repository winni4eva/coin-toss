import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from '../@store/models/app-state.model';
import { AssetItem } from '../@store/models/asset.model';
import { FavouriteItem } from '../@store/models/favourites.model';
import { AddFavouriteAction } from '../@store/actions/favourites.actions';
import { ToastService } from '../@shared/toast/toast.service';
import { LoadingAssetAction } from '../@store/actions/asset.actions';
//import { LoadingAssetIconAction } from '../@store/actions/asset-icons.actions';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit, OnDestroy {

  assets$: Observable<Array<AssetItem>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>;
  favourites$: Observable<Array<FavouriteItem>>;
  favouritesSubscription: Subscription;
  initialised = false;
  search;

  constructor(
    private store: Store<AppState>,
    private _toast: ToastService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.subscribeToFavourites();
    this.initialiseAssets();
  }

  initialiseAssets() {
    this.assets$ = this.store.select(store => store.asset.list);
    this.loading$ = this.store.select(store => store.asset.loading);
    this.error$ = this.store.select(store => store.asset.error);
    this._toast.showInfo('Loading assets');
    //this.store.dispatch(new LoadingAssetIconAction());
    this.store.dispatch(new LoadingAssetAction());
    this.initialised = true;
  }

  subscribeToFavourites() {
    this.favourites$ = this.store.select(store => store.favourite);
    this.favouritesSubscription = this.favourites$.subscribe((response: Array<FavouriteItem>) => {
      if(!this.initialised && response.length) {
        const confirmed = confirm(`
          You have already selected favourite assets, 
          would you like to view exchange data on them?`
        );
        if (confirmed) {
          this._router.navigate(['exchange']);
        }
      }
    });
  }

  onAssetSelect(event) {
    this.addFavouriteAsset(event);
  }

  addFavouriteAsset(asset: FavouriteItem) {
    this.store.dispatch(new AddFavouriteAction(asset));
    this._toast.showInfo(`${asset.name} has been added as a favourite`);
  }

  ngOnDestroy() {
    this.favouritesSubscription.unsubscribe();
  }

}
