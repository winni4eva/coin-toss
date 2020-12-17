import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'assetIcon',
  pure: true
})
export class AssetIconPipe implements PipeTransform {
  COIN_ICONS = 'COIN_ICONS';

  transform(assetId: string, ...args: unknown[]): unknown {
    const icons = JSON.parse(localStorage.getItem(this.COIN_ICONS)) || [];

    const assetIcon = icons.filter(({asset_id}) => assetId === assetId);
    if (assetIcon) {
      return assetIcon['url'];
    }
    return null;
  }

}
