import { AssetItem } from 'src/app/@store/models/asset.model';
import { AssetSearchPipe } from './asset-search.pipe';

const assets: Array<AssetItem> = [
  {
    asset_id:"BTC",
    name:"Bitcoin",
    type_is_crypto:1,
    data_start:"2010-07-17",
    data_end:"2020-12-20",
    data_quote_start:"2014-02-24T17:43:05.0000000Z",
    data_quote_end:"2020-12-20T13:01:06.4593392Z",
    data_orderbook_start:"2014-02-24T17:43:05.0000000Z",
    data_orderbook_end:"2020-08-05T14:38:38.3413202Z",
    data_trade_start:"2010-07-17T23:09:17.0000000Z",
    data_trade_end:"2020-12-20T13:01:17.6040000Z",
    data_symbols_count:44863,
    volume_1hrs_usd:4447384518650.3,
    volume_1day_usd:187027196611379.28,
    volume_1mth_usd:3796483866857716.5,
    price_usd:23524.597615521292,
    id_icon:"4caf2b16-a017-4e26-a348-2cea69c34cba"
  },
  {
    asset_id:"ETH",
    name:"Etherium",
    type_is_crypto:1,
    data_start:"2010-07-17",
    data_end:"2020-12-20",
    data_quote_start:"2014-02-24T17:43:05.0000000Z",
    data_quote_end:"2020-12-20T13:01:06.4593392Z",
    data_orderbook_start:"2014-02-24T17:43:05.0000000Z",
    data_orderbook_end:"2020-08-05T14:38:38.3413202Z",
    data_trade_start:"2010-07-17T23:09:17.0000000Z",
    data_trade_end:"2020-12-20T13:01:17.6040000Z",
    data_symbols_count:44863,
    volume_1hrs_usd:4447384518650.3,
    volume_1day_usd:187027196611379.28,
    volume_1mth_usd:3796483866857716.5,
    price_usd:23524.597615521292,
    id_icon:"4caf2b16-a017-4e26-a348-2cea69c34cba"
  },
];

describe('AssetSearchPipe', () => {
  it('should return all matching assets', () => {
    const pipe = new AssetSearchPipe();
    const filteredAssets = pipe.transform(assets, 'Eth');

    expect(filteredAssets.length).toEqual(1);
    expect(filteredAssets[0]['name']).toBe(assets[1]['name']);
  });
});
