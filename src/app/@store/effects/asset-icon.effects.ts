import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { 
  LoadingAssetIconAction, 
  LoadingAssetIconSuccessAction, 
  LoadingAssetIconErrorAction 
} from '../actions/asset-icons.actions'
import { of } from 'rxjs';
import { AssetsService } from '../../assets/assets.service';
import { AssetIconActionTypes } from '../actions/asset-icons.actions';
import { AssetIconItem } from '../models/asset-icon.model';

@Injectable()
export class AssetIconEffects {

  @Effect() loadAssetIcons$ = this.actions$
    .pipe(
      ofType<LoadingAssetIconAction>(AssetIconActionTypes.LOADING_ASSET_ICON),
      mergeMap(
        () => this._assetService.getAssetIcons()
          .pipe(
            map((data: Array<AssetIconItem>) => {
              return new LoadingAssetIconSuccessAction(data)
            }),
            catchError(error => of(new LoadingAssetIconErrorAction(error)))
          )
      ),
  )

  constructor(
    private actions$: Actions,
    private _assetService: AssetsService
  ) { }
}