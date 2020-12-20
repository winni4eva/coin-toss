import { AssetIconActionTypes, AssetIconAction } from '../actions/asset-icons.actions';
import { AssetIconItem } from '../models/asset-icon.model';

export interface AssetIconState {
  list: AssetIconItem[],
  loading: boolean,
  error: Error
}

const initialState: AssetIconState = {
  list: [],
  loading: false,
  error: undefined
};

export function AssetIconReducer(state: AssetIconState = initialState, action: AssetIconAction) {
  switch (action.type) {
    case AssetIconActionTypes.LOADING_ASSET_ICON:
      return {
        ...state,
        loading: true
      };
    case AssetIconActionTypes.LOADING_ASSET_ICON_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    case AssetIconActionTypes.LOADING_ASSET_ICON_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}