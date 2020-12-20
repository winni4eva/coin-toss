import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SocketService } from '../@shared/socket/socket.service';
import { AssetsService } from '../assets/assets.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {

  favourites = [
    {
      asset_id:"BTC",
      name:"Bitcoin"
    },
    {
      asset_id:"ETH",
      name:"Etherium"
    }
  ];
  private matchCurrency = 'USD';

  constructor(
    private _socketService: SocketService
    ) { }

  ngOnInit(): void {
    this._socketService.connect();
    const favouriteAssets = this.favourites.map(({asset_id}) => asset_id);
    this._socketService.sendMessage(
      {
        "type": "hello",
        "apikey": environment.coinKey,
        "heartbeat": false,
        "subscribe_data_type": ["trade"],
        "subscribe_filter_asset_id": favouriteAssets
      }
    );
    this._socketService.messages$.subscribe(
      (msg: string) => { 
        this.computeAssetExchanges(msg);
      });
  }

  computeAssetExchanges(msg: string) {
    const { symbol_id, price, size, taker_side } = JSON.parse(msg);

    this.favourites.map(favourite => {
      if (symbol_id.includes(favourite.asset_id) && symbol_id.includes(this.matchCurrency)) {
        if (favourite[`price_${taker_side}`]) {
          if(price > favourite[`price_${taker_side}`]) {
            favourite[`change_${taker_side}`] = 1;
          } else if (price < favourite[`price_${taker_side}`]) {
            favourite[`change_${taker_side}`] = -1;
          } else {
            favourite[`change_${taker_side}`] = 0;
          }
        } else {
          favourite[`change_${taker_side}`] = 0;
        }
        favourite[`price_${taker_side}`] = price;
      }
    });
  }

}
