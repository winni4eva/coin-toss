import { FavouriteActionTypes, FavouriteAction } from '../actions/favourites.actions';
import { FavouriteItem } from '../models/favourites.model';

const initialState: Array<FavouriteItem> = [];

export function FavouritesReducer(state: Array<FavouriteItem> = initialState, action: FavouriteAction) {
  switch (action.type) {
    case FavouriteActionTypes.ADD_FAVOURITE:
      return [...state, action.payload];
    default:
      return state;
  }
}