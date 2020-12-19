import { AssetItem } from './asset.model';
import { FavouriteItem } from './favourites.model';

export interface AppState {
  readonly asset: Array<AssetItem>
  readonly favourite: Array<FavouriteItem>
}