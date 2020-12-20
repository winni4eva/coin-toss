import { Action } from '@ngrx/store';
import { AssetItem } from '../models/asset.model';

export enum AssetActionTypes {
  LOADING_ASSET = '[CRYPTO] Loading Asset',
  LOADING_ASSET_SUCCESS = '[CRYPTO] Loading Asset Success',
  LOADING_ASSET_ERROR = '[CRYPTO] Loading Asset Error',
}
export class LoadingAssetAction implements Action {
  readonly type = AssetActionTypes.LOADING_ASSET;
}
export class LoadingAssetSuccessAction implements Action {
  readonly type = AssetActionTypes.LOADING_ASSET_SUCCESS;

  constructor(public payload: Array<AssetItem>) { }
}
export class LoadingAssetErrorAction implements Action {
  readonly type = AssetActionTypes.LOADING_ASSET_ERROR;

  constructor(public payload: Error) { }
}

export type AssetAction = LoadingAssetAction | 
  LoadingAssetSuccessAction | 
  LoadingAssetErrorAction;