import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SocketService } from './@shared/socket/socket.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AssetsComponent } from './assets/assets.component';
import { AssetComponent } from './asset/asset.component';
import { HeaderComponent } from './@shared/header/header/header.component';

import { AssetsService } from './assets/assets.service';
import { InterceptorService } from './@shared/http/interceptor.service';

import { AssetIconPipe } from './@shared/pipes/asset-icon.pipe';

import { AssetReducer } from './@store/reducers/asset.reducer';
import {  FavouritesReducer } from './@store/reducers/favourite.reducer';


@NgModule({
  declarations: [
    AppComponent,
    AssetsComponent,
    AssetComponent,
    HeaderComponent,
    AssetIconPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forRoot({
      asset: AssetReducer,
      favourite: FavouritesReducer,
    }),
  ],
  providers: [
    AssetsService,
    SocketService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
