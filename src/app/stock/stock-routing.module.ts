import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsComponent } from './assets/assets.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { StockComponent } from './stock.component';

const routes: Routes = [
  {
    path: '',
    component: StockComponent,
    children: [
      { path: 'assets', component: AssetsComponent },
      { path: 'favourites', component: FavouritesComponent },
      { path: 'exchange', component: ExchangeComponent },
      { path: '', component: AssetsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }