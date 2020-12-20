import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssetState } from '../@store/reducers/asset.reducer';
import { AssetsComponent } from './assets.component';
import { ToastService } from '../@shared/toast/toast.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AssetItem } from '../@store/models/asset.model';
import { Store } from '@ngrx/store';
import { AssetSearchPipe } from '../@shared/pipes/asset-search/asset-search.pipe';
import { ExchangeComponent } from '../exchange/exchange.component';
import { By } from '@angular/platform-browser';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AssetIconPipe } from '../@shared/pipes/asset-icon/asset-icon.pipe';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

describe('AssetsComponent', () => {
  let component: AssetsComponent;
  let fixture: ComponentFixture<AssetsComponent>, mockToastService, mockStore;
  @Component({
    selector: 'app-asset',
    template: `
      <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
        <div 
          *ngIf="asset?.asset_id | assetIcon as assetUrl"
          class="flex items-end justify-end h-56 w-full bg-cover"
          [style.background-image]="'url(' + assetUrl + ')'"
          style="background-size: 150px 150px; background-repeat: no-repeat; background-position: center;">
            <button class="p-2 bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              Add
                <!-- <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> -->
            </button>
        </div>
        <div class="px-5 py-3">
            <h3 class="text-gray-700 uppercase">{{asset?.name}}</h3>
            <!-- <span class="text-gray-500 mt-2">coin</span> -->
        </div>
      </div>
    `
  })
  class FakeAssetComponent {
      @Input() asset: AssetItem;
      @Output() delete = new EventEmitter(); 
  } 
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
    mockToastService = jasmine.createSpyObj('MockToastService',['showInfo']);
    mockStore = jasmine.createSpyObj('StoreMock',['select', 'dispatch']);

    mockStore.select.and.returnValues(of([]), of(initialState.list), of(initialState.loading), of(initialState.error));

    TestBed.overrideProvider(ToastService, { useValue: mockToastService });
    TestBed.overrideProvider(Store, { useValue: mockStore });
    
    await TestBed.configureTestingModule({
      declarations: [ 
        AssetsComponent,
        FakeAssetComponent,
        AssetSearchPipe,
        AssetIconPipe,
      ],
      providers: [
        ToastService,
        Store
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(
          [{path: 'exchange', component: ExchangeComponent},]
        )
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsComponent);
    component = fixture.componentInstance;
    component.initialised = true;
    fixture.detectChanges();
  });

  it('should display count of assets', () => {
    fixture.detectChanges();
    const debugElement = fixture.debugElement.queryAll(By.css('span'));
    const spanText = debugElement[1].nativeElement.textContent;
    
    expect(spanText).toEqual(` ${assets.length} assets `);
    expect(mockStore.select).toHaveBeenCalledTimes(4);
  });

  it('should display asset component cards', () => {
    fixture.detectChanges();
    const debugElement = fixture.debugElement.queryAll(By.css('span'));
    const assetsComponents = debugElement[2].childNodes;
    
    expect(assetsComponents.length).toEqual(assets.length);
  });
});
