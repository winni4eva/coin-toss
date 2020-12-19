import { Action } from '@ngrx/store';
import { FavouriteItem } from '../models/favourites.model';

export enum FavouriteActionTypes {
  ADD_FAVOURITE = '[CRYPTO] Add Favourite',
}

export class AddFavouriteAction implements Action {
  readonly type = FavouriteActionTypes.ADD_FAVOURITE;

  constructor(public payload: FavouriteItem) { }
}

export type FavouriteAction = AddFavouriteAction;