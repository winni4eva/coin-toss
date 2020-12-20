import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { catchError, tap, switchAll } from 'rxjs/operators';
import { EMPTY, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
export const WS_ENDPOINT = environment.coinWssHost;

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket$: WebSocketSubject<any>;
  private messagesSubject$ = new Subject();
  public messages$ = this.messagesSubject$.asObservable();

  constructor() { }

  public connect(): void {
    if (!this.socket$ || this.socket$.closed) {
      this.socket$ = this.getNewWebSocket();
    }
  }
 
  private getNewWebSocket() {
    let subject = webSocket(
      {
        url: WS_ENDPOINT,
        serializer: msg => JSON.stringify(msg)
      }
    );
    subject.subscribe(
      (msg) => this.messagesSubject$.next(JSON.stringify(msg)),
      (err) => console.log(err),
      () => console.log('WSS','Closing Connection')
    );
    return subject;
  }

  sendMessage(msg: any) {
    this.socket$.next(msg);
  }

  close() {
    this.socket$.complete(); 
  }
}
