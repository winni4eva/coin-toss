import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { 
  LoadingAssetAction, 
  LoadingAssetSuccessAction, 
  LoadingAssetErrorAction 
} from '../actions/asset.actions'
import { of } from 'rxjs';
import { AssetsService } from '../../assets/assets.service';
import { AssetActionTypes } from '../actions/asset.actions';

@Injectable()
export class AssetsEffects {

  @Effect() loadShopping$ = this.actions$
    .pipe(
      ofType<LoadingAssetAction>(AssetActionTypes.LOADING_ASSET),
      mergeMap(
        () => this._assetService.getAssets()
          .pipe(
            map(data => {
              return new LoadingAssetSuccessAction(data)
            }),
            catchError(error => of(new LoadingAssetErrorAction(error)))
          )
      ),
  )

  constructor(
    private actions$: Actions,
    private _assetService: AssetsService
  ) { }
}