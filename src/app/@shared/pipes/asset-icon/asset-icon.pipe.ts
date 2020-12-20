import { Pipe, PipeTransform } from '@angular/core';
import { State } from '@ngrx/store';
import { AppState } from '../../../@store/models/app-state.model';

@Pipe({
  name: 'assetIcon',
  pure: true
})
export class AssetIconPipe implements PipeTransform {
  
  matchedIconUrl: string;

  constructor(private state: State<AppState>) {}

  transform(assetId: string, ...args: unknown[]): string {
    const matchedIcon = this.state.getValue()
                          ?.assetIcon
                          ?.list
                          ?.filter(({asset_id}) => asset_id === assetId);
    
    if (Array.isArray(matchedIcon) && matchedIcon.length) {
      this.matchedIconUrl = matchedIcon[0]['url'];
    }
  
    return this.matchedIconUrl || '../../../assets/default.jpg';
  }

}
