import { Component, Input, OnInit, HostListener, Output, EventEmitter } from '@angular/core';
import { FavouriteItem } from '../@store/models/favourites.model';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {
  
  @Input() asset: any;
  @Output() selectedAsset: EventEmitter<FavouriteItem> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("click", ['$event']) onClick(event: MouseEvent){
    this.selectedAsset.emit(this.asset);
  }

}
