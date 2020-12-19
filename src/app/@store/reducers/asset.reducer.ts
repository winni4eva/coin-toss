import { AssetActionTypes, AssetAction } from '../actions/asset.actions';
import { AssetItem } from '../models/asset.model';

const initialState: Array<AssetItem> = [
  {
    asset_id: "BTC",
    data_end: "2020-12-17",
    data_orderbook_end: "2020-08-05T14:38:38.3413202Z",
    data_orderbook_start: "2014-02-24T17:43:05.0000000Z",
    data_quote_end: "2020-12-17T07:55:07.7375647Z",
    data_quote_start: "2014-02-24T17:43:05.0000000Z",
    data_start: "2010-07-17",
    data_symbols_count: 44533,
    data_trade_end: "2020-12-17T07:55:50.8670000Z",
    data_trade_start: "2010-07-17T23:09:17.0000000Z",
    id_icon: "4caf2b16-a017-4e26-a348-2cea69c34cba",
    name: "Bitcoin",
    price_usd: 22450.9122406137,
    type_is_crypto: 1,
    volume_1day_usd: 209482874400792,
    volume_1hrs_usd: 8455954065488.66,
    volume_1mth_usd: 3593336868251697.5,
  }
];

export function AssetReducer(state: Array<AssetItem> = initialState, action: AssetAction) {
  switch (action.type) {
    case AssetActionTypes.ADD_ASSET:
      return [...state, action.payload];
    default:
      return state;
  }
}