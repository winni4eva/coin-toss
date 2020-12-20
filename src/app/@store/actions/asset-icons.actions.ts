import { Action } from '@ngrx/store';
import { AssetIconItem } from '../models/asset-icon.model';

export enum AssetIconActionTypes {
  LOADING_ASSET_ICON = '[CRYPTO] Loading Asset Icon',
  LOADING_ASSET_ICON_SUCCESS = '[CRYPTO] Loading Asset Icon Success',
  LOADING_ASSET_ICON_ERROR = '[CRYPTO] Loading Asset Icon Error',
}

export class LoadingAssetIconAction implements Action {
  readonly type = AssetIconActionTypes.LOADING_ASSET_ICON;
}
export class LoadingAssetIconSuccessAction implements Action {
  readonly type = AssetIconActionTypes.LOADING_ASSET_ICON_SUCCESS;

  constructor(public payload: Array<AssetIconItem>) { }
}
export class LoadingAssetIconErrorAction implements Action {
  readonly type = AssetIconActionTypes.LOADING_ASSET_ICON_ERROR;

  constructor(public payload: Error) { }
}

export type AssetIconAction = LoadingAssetIconAction | 
LoadingAssetIconSuccessAction | 
LoadingAssetIconErrorAction;