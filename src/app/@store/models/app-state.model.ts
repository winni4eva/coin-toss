import { AssetState } from '../reducers/asset.reducer';
import { FavouriteItem } from './favourites.model';

export interface AppState {
  readonly asset: AssetState
  readonly favourite: Array<FavouriteItem>
}