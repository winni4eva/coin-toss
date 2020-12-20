import { AssetActionTypes, AssetAction } from '../actions/asset.actions';
import { AssetItem } from '../models/asset.model';

export interface AssetState {
  list: AssetItem[],
  loading: boolean,
  error: Error
}

const initialState: AssetState = {
  list: [],
  loading: false,
  error: undefined
};

export function AssetReducer(state: AssetState = initialState, action: AssetAction) {
  switch (action.type) {
    case AssetActionTypes.LOADING_ASSET:
      return {
        ...state,
        loading: true
      };
    case AssetActionTypes.LOADING_ASSET_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    case AssetActionTypes.LOADING_ASSET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}