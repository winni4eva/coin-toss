import { Component, Input, OnInit, HostListener, Output, EventEmitter } from '@angular/core';
import { AssetItem } from '../../@store/models/asset.model';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent implements OnInit {
  
  @Input() asset: AssetItem;
  @Output() selectedAsset: EventEmitter<AssetItem> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("click", ['$event']) onClick(event: MouseEvent){
    this.selectedAsset.emit(this.asset);
  }

}
