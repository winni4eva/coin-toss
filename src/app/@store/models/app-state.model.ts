import { AssetState } from '../reducers/asset.reducer';
import { AssetIconItem } from './asset-icon.model';
import { FavouriteItem } from './favourites.model';
import { AssetIconState } from '../reducers/asset-icon.reducer';

export interface AppState {
  readonly asset: AssetState
  readonly favourite: Array<FavouriteItem>
  readonly assetIcon: AssetIconState
}