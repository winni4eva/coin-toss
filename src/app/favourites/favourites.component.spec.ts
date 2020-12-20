import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { of } from 'rxjs/internal/observable/of';
import { AssetIconPipe } from '../@shared/pipes/asset-icon/asset-icon.pipe';
import { AssetItem } from '../@store/models/asset.model';
import { AssetState } from '../@store/reducers/asset.reducer';
import { FavouritesComponent } from './favourites.component';

fdescribe('FavouritesComponent', () => {
  let component: FavouritesComponent;
  let fixture: ComponentFixture<FavouritesComponent>, mockStore;
  @Component({
    selector: 'app-favourite',
    template: `
      <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
        <div 
          *ngIf="favourite?.asset_id | assetIcon as assetUrl"
          class="flex items-end justify-end h-56 w-full bg-cover"
          [style.background-image]="'url(' + assetUrl + ')'"
          style="background-size: 150px 150px; background-repeat: no-repeat; background-position: center;">
            <button class="p-2 bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              Delete
                <!-- <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> -->
            </button>
        </div>
        <div class="px-5 py-3">
            <h3 class="text-gray-700 uppercase">{{favourite?.name}}</h3>
            <!-- <span class="text-gray-500 mt-2">coin</span> -->
        </div>
      </div>
    `
  })
  class FakeFavouriteComponent {}

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
  const initialState: AssetState = {
    list: assets,
    loading: false,
    error: undefined
  };

  beforeEach(async () => {
    mockStore = jasmine.createSpyObj('StoreMock',['select']);

    mockStore.select.and.returnValues(of(initialState.list));

    TestBed.overrideProvider(Store, { useValue: mockStore });
    await TestBed.configureTestingModule({
      declarations: [ 
        FavouritesComponent,
        FakeFavouriteComponent,
        AssetIconPipe,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display count of favourites', () => {
    fixture.detectChanges();
    const debugElement = fixture.debugElement.queryAll(By.css('span'));
    const spanText = debugElement[0].nativeElement.textContent;
    
    expect(spanText).toEqual(` ${assets.length} favourites `);
    expect(mockStore.select).toHaveBeenCalledTimes(1);
  });
});
