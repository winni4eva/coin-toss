import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AssetsService } from './assets.service';
import { AssetItem } from '../@store/models/asset.model';
import { environment } from '../../environments/environment';

fdescribe('AssetsService', () => {
  let service: AssetsService;
  let httpTestingController: HttpTestingController;
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(AssetsService);
  });

  describe('getAssets', () => {
    it('should call getAssets with the correct url', () => {
      const endpoint = environment.coinRestHost + '/assets';
  
      service.getAssets().subscribe();
    
      const req = httpTestingController.expectOne(endpoint);
      req.flush(assets);
      httpTestingController.verify();
    });
  });

  describe('getAssetIcons', () => {
    it('should call getAssetIcons with the correct url', () => {
      const imageSize = 64;
      const endpoint = environment.coinRestHost + `/assets/icons/${imageSize}`;
  
      service.getAssetIcons(64).subscribe();
    
      const req = httpTestingController.expectOne(endpoint);
      req.flush(assets);
      httpTestingController.verify();
    });
  });
});
