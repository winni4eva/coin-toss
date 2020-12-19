import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SocketService } from './@shared/socket/socket.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from "./app-routing.module";
import { ToastNotificationsModule } from "ngx-toast-notifications";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { AssetsComponent } from './assets/assets.component';
import { AssetComponent } from './asset/asset.component';
import { HeaderComponent } from './@shared/header/header/header.component';
import { FavouritesComponent } from './favourites/favourites.component';

import { AssetsService } from './assets/assets.service';
import { InterceptorService } from './@shared/http/interceptor.service';
import { ToastService } from './@shared/toast/toast.service';
import { AssetsEffects } from './@store/effects/asset.effects';

import { AssetIconPipe } from './@shared/pipes/asset-icon.pipe';

import { AssetReducer } from './@store/reducers/asset.reducer';
import {  FavouritesReducer } from './@store/reducers/favourite.reducer';
import { FavouriteComponent } from './favourite/favourite.component';

const reducers = {
  asset: AssetReducer,
  favourite: FavouritesReducer,
};

@NgModule({
  declarations: [
    AppComponent,
    AssetsComponent,
    AssetComponent,
    HeaderComponent,
    AssetIconPipe,
    FavouritesComponent,
    FavouriteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ToastNotificationsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AssetsEffects]),
  ],
  providers: [
    AssetsService,
    SocketService,
    ToastService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
