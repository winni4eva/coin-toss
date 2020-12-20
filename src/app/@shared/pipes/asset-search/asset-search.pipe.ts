import { Pipe, PipeTransform } from '@angular/core';
import { AssetItem } from 'src/app/@store/models/asset.model';

@Pipe({
  name: 'assetSearch',
  pure: true
})
export class AssetSearchPipe implements PipeTransform {

  transform(assets: Array<AssetItem>, searchTerm: string): Array<AssetItem> {
    if (searchTerm) {
      return assets.filter(({name}) => name && name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    return assets;
  }

}
