import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { ExchangeComponent } from './exchange.component';
import { FavouriteItem } from '../../@store/models/favourites.model';
import { of } from 'rxjs/internal/observable/of';
import { By } from '@angular/platform-browser';

describe('ExchangeComponent', () => {
  let component: ExchangeComponent;
  let fixture: ComponentFixture<ExchangeComponent>, mockStore;
  const favourites: Array<FavouriteItem> = [
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

  beforeEach(async () => {
    mockStore = jasmine.createSpyObj('StoreMock',['select']);

    mockStore.select.and.returnValue(of(favourites));

    TestBed.overrideProvider(Store, { useValue: mockStore });
    await TestBed.configureTestingModule({
      declarations: [ ExchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display exchange rates for favourites', () => {
    const dataRows = fixture.debugElement.queryAll(By.css('tr.bg-white'));

    expect(dataRows.length).toEqual(favourites.length);
  });

  it('should display favourite asset name', () => {
    const spans = fixture.debugElement.queryAll(By.css('span.font-semibold'));

    expect(spans.length).toEqual(favourites.length);
    expect(spans[0].nativeElement.textContent).toEqual(`${favourites[0].name} (USD)`);
    expect(spans[1].nativeElement.textContent).toEqual(`${favourites[1].name} (USD)`);
  });

});
