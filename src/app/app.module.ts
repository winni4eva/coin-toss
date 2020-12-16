import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoinsComponent } from './coins/coins.component';
import { CoinComponent } from './coin/coin.component';
import { HeaderComponent } from './shared/header/header/header.component';

import { CoinsService } from './coins/coins.service';
import { InterceptorService } from './shared/http/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    CoinsComponent,
    CoinComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    CoinsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
