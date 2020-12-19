import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AssetItem } from '../@store/models/asset.model';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {
  
  private coinUrl = environment.coinRestHost; 

  constructor(private _http: HttpClient) { }

  getRates(coin = 'BTC') {
    const endpoint = this.coinUrl + `/exchangerate/${coin}?invert=false`;

    return this._http.get(endpoint);
  }

  getAssets() {
    const endpoint = this.coinUrl + `/assets`;

    return this._http.get<Array<AssetItem>>(endpoint);
  }

  getAssetIcons(iconSize: number = 64) {
    const endpoint = this.coinUrl + `/assets/icons/${iconSize}`;

    return this._http.get(endpoint);
  }
}
