import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './stock.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { AssetsComponent } from './assets/assets.component';
import { AssetComponent } from './asset/asset.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StockRoutingModule } from './stock-routing.module';
import { AssetIconPipe } from '../@shared/pipes/asset-icon/asset-icon.pipe';
import { AssetSearchPipe } from '../@shared/pipes/asset-search/asset-search.pipe';



@NgModule({
  declarations: [
    StockComponent,
    AssetsComponent,
    AssetComponent,
    FavouritesComponent,
    FavouriteComponent,
    ExchangeComponent,
    AssetIconPipe,
    AssetSearchPipe,
  ],
  imports: [
    CommonModule,
    StockRoutingModule,
    //RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    StockComponent,
    AssetsComponent,
    AssetComponent,
    FavouritesComponent,
    FavouriteComponent,
    ExchangeComponent,
    AssetIconPipe,
    AssetSearchPipe,
  ]
})
export class StockModule { }
