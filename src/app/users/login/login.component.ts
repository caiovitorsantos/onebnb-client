import { Component, OnInit } from '@angular/core';
import { Angular2TokenService, SignInData } from 'angular2-token';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  constructor(private _tokenService: Angular2TokenService) { }
 
  private _signInData: SignInData = <SignInData>{};
  private _output: any;
 
  ngOnInit() {
  }
 
  onSubmit() {
    this._output = null;
 
    this._tokenService.signIn(this._signInData).subscribe(
      res => {
        this._signInData = <SignInData>{};
        this._output = res;
        console.log('res');
        console.log(res);
        console.log('signData');
        console.log(this._signInData);
      }, error => {
        this._signInData = <SignInData>{};
        this._output = error;
      }
    );
  }
}