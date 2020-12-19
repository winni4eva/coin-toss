import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsComponent } from './assets/assets.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { ExchangeComponent } from './exchange/exchange.component';

const routes: Routes = [
  { path: 'assets', component: AssetsComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'exchange', component: ExchangeComponent },
  { path: '', component: AssetsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }