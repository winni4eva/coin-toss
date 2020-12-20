import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../@store/models/app-state.model';
import { AssetIconItem } from '../../../@store/models/asset-icon.model';

@Pipe({
  name: 'assetIcon',
  pure: true
})
export class AssetIconPipe implements PipeTransform {
  
  assetsIcons$: Observable<Array<AssetIconItem>>;
  matchedIconUrl: string;

  //constructor(private store: Store<AppState>) {
    //this.assetsIcons$ = this.store.select(store => store.assetIcon.list);
  //}

  transform(assetId: string, ...args: unknown[]): string {
    
    // this.assetsIcons$.subscribe((response: Array<AssetIconItem>) => {
    //   const assetIcon = response.filter(({asset_id}) => asset_id === assetId);
    //   if (Array.isArray(assetIcon) && assetIcon.length === 1) {
    //     this.matchedIconUrl = assetIcon[0]['url'];
    //   }
    // });
  
    return this.matchedIconUrl || '../../../assets/default.jpg';
  }

}
