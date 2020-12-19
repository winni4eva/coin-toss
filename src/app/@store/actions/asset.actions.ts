import { Action } from '@ngrx/store';
import { AssetItem } from '../models/asset.model';

export enum AssetActionTypes {
  ADD_ASSET = '[CRYPTO] Add Asset',
}

export class AddAssetAction implements Action {
  readonly type = AssetActionTypes.ADD_ASSET;

  constructor(public payload: AssetItem) { }
}

export type AssetAction = AddAssetAction;