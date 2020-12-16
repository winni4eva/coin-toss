import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {
  
  private coinUrl = environment.coinRestHost; 

  constructor(private _http: HttpClient) { }

  getRates(coin = 'BTC') {
    const endpoint = this.coinUrl + `/v1/exchangerate/${coin}?invert=false`;

    return this._http.get(endpoint);
  }

  getAssets() {
    const endpoint = this.coinUrl + `/v1/assets`;

    return this._http.get(endpoint)
  }
}
