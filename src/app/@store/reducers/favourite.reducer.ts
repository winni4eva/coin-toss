import { FavouriteActionTypes, FavouriteAction } from '../actions/favourites.actions';
import { FavouriteItem } from '../models/favourites.model';

const initialState: Array<FavouriteItem> = [];

export function FavouritesReducer(state: Array<FavouriteItem> = initialState, action: FavouriteAction) {
  switch (action.type) {
    case FavouriteActionTypes.ADD_FAVOURITE:
      return [...state, action.payload];
    case FavouriteActionTypes.DELETE_FAVOURITE:
      return state.filter(asset => asset.asset_id !== action.payload);
    default:
      return state;
  }
}