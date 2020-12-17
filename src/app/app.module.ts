import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SocketService } from './shared/socket/socket.service';

import { AppComponent } from './app.component';
import { CoinsComponent } from './coins/coins.component';
import { CoinComponent } from './coin/coin.component';
import { HeaderComponent } from './shared/header/header/header.component';

import { CoinsService } from './coins/coins.service';
import { InterceptorService } from './shared/http/interceptor.service';

import { AssetIconPipe } from './shared/pipes/asset-icon.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoinsComponent,
    //CoinComponent,
    HeaderComponent,
    AssetIconPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    CoinsService,
    SocketService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
    // { provide: InjectableRxStompConfig, useValue: myRxStompConfig },
    // {
    //   provide: RxStompService,
    //   useFactory: rxStompServiceFactory,
    //   deps: [InjectableRxStompConfig],
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
