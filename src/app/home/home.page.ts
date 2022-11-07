import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  isApplePayAvailable() {
    // @ts-ignore
    window.cordova.plugins.BraintreeGooglePayApplePay.coolMethod("Hi Akhilesh!", (r) => {
      console.log(r);
    }, (r) => {
      console.log(r);
    });
  }

}
