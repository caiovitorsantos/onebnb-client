import { Component, OnInit } from '@angular/core';
import { Angular2TokenService, SignInData } from 'angular2-token';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private _tokenService: Angular2TokenService) { }

  private _signInData: SignInData = <SignInData>{};
   
  ngOnInit() {
  }

  sendEmail(){
  	console.log("Email: " + this._signInData.email);
  	this._tokenService.resetPassword({ email: this._signInData.email }).subscribe(
  		res => { console.log(res); },
  		error => { console.log(error); }
  		);
  }

}
