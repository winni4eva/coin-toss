import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'assetIcon',
  pure: true
})
export class AssetIconPipe implements PipeTransform {
  COIN_ICONS = 'COIN_ICONS';

  transform(assetId: string, ...args: unknown[]): string {
    const icons = JSON.parse(localStorage.getItem(this.COIN_ICONS)) || [];
    const assetIcon = icons.filter(({asset_id}) => asset_id === assetId);

    if (Array.isArray(assetIcon) && assetIcon.length === 1) {
      return assetIcon[0]['url'];
    }
    return '../../../assets/default.jpg';
  }

}
