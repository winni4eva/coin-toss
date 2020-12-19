import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../@store/models/app-state.model';
import { FavouriteItem } from '../@store/models/favourites.model';
import { DeleteFavouriteAction } from '../@store/actions/favourites.actions';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  favourites$: Observable<Array<FavouriteItem>>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.favourites$ = this.store.select(store => store.favourite);
  }

  onSelectfavourite(event: FavouriteItem) {
    this.store.dispatch(new DeleteFavouriteAction(event.asset_id));
  }

}
