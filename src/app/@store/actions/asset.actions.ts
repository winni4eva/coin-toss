import { Action } from '@ngrx/store';
import { AssetItem } from '../models/asset.model';

export enum AssetActionTypes {
  ADD_ASSET = '[CRYPTO] Add Asset',
  LOADING_ASSET = '[CRYPTO] Loading Asset',
  LOADING_ASSET_SUCCESS = '[CRYPTO] Loading Asset Success',
  LOADING_ASSET_ERROR = '[CRYPTO] Loading Asset Error',
}

export class AddAssetAction implements Action {
  readonly type = AssetActionTypes.ADD_ASSET;

  constructor(public payload: AssetItem) { }
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

export type AssetAction = AddAssetAction | 
  LoadingAssetAction | 
  LoadingAssetSuccessAction | 
  LoadingAssetErrorAction;