import { Injectable } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Injectable({
  providedIn: 'root'
})
export class CallService {

  constructor(private callNumber: CallNumber) { }

  callPhone(phone: string) {
    console.log('CallService callPhone: ', phone);
    this.callNumber.callNumber(phone, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }
}
