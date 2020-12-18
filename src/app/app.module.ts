import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SocketService } from './@shared/socket/socket.service';

import { AppComponent } from './app.component';
import { AssetsComponent } from './assets/assets.component';
import { AssetComponent } from './asset/asset.component';
import { HeaderComponent } from './@shared/header/header/header.component';

import { AssetsService } from './assets/assets.service';
import { InterceptorService } from './@shared/http/interceptor.service';

import { AssetIconPipe } from './@shared/pipes/asset-icon.pipe';

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
  ],
  providers: [
    AssetsService,
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
