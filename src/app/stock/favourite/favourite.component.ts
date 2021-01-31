import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { FavouriteItem } from '../../@store/models/favourites.model';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {

  @Input() favourite: FavouriteItem;
  @Output() selectedFavourite: EventEmitter<FavouriteItem> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("click", ['$event']) onClick(event: MouseEvent){
    this.selectedFavourite.emit(this.favourite);
  }

}
