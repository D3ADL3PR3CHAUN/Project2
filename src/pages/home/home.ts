import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyComponent } from '../../components/foo';
import { SignInPage } from '../sign-in/sign-in';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoSignIn() {
    this.navCtrl.push(SignInPage);
  }

}
