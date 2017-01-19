import { Component, OnInit } from '@angular/core';
import { Angular2TokenService, RegisterData } from 'angular2-token';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // Proprties Register Model (already has properties like a email, password, etc)
  private _registerData: RegisterData = <RegisterData>{};
  private _output: any;

  constructor(private  _tokenService: Angular2TokenService) { }

  ngOnInit() {
  	console.log(this._registerData);
  }

  onSubmit(){
  	this._output = null;

  	this._tokenService.registerAccount(this._registerData).subscribe(
  		res => {
  			this._registerData = <RegisterData>{};
  			this._output = res;
  		},
  		error => {
  			this._registerData = <RegisterData>{};
  			this._output = error;
  		}
  	);
  }

}
