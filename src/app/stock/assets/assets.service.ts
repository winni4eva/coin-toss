import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AssetItem } from '../../@store/models/asset.model';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {
  
  private coinUrl = environment.coinRestHost; 

  constructor(private _http: HttpClient) { }

  getAssets() {
    const endpoint = this.coinUrl + `/assets`;

    return this._http.get<Array<AssetItem>>(endpoint);
  }

  getAssetIcons(iconSize: number = 64) {
    const endpoint = this.coinUrl + `/assets/icons/${iconSize}`;

    return this._http.get(endpoint);
  }
}
