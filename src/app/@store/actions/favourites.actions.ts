import { Action } from '@ngrx/store';
import { FavouriteItem } from '../models/favourites.model';

export enum FavouriteActionTypes {
  ADD_FAVOURITE = '[CRYPTO] Add Favourite',
  DELETE_FAVOURITE = '[CRYPTO] Delete Favourite',
}

export class AddFavouriteAction implements Action {
  readonly type = FavouriteActionTypes.ADD_FAVOURITE;

  constructor(public payload: FavouriteItem) { }
}

export class DeleteFavouriteAction implements Action {
  readonly type = FavouriteActionTypes.DELETE_FAVOURITE;

  constructor(public payload: string) { }
}

export type FavouriteAction = AddFavouriteAction | DeleteFavouriteAction;