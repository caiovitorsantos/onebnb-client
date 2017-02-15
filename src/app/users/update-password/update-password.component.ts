import { Component, OnInit } from '@angular/core';
import { Angular2TokenService, RegisterData } from 'angular2-token';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {

  constructor(private _tokenService: Angular2TokenService) { }

  private _registerData : RegisterData = <RegisterData>{};


  ngOnInit() {
  }

  updatePassword(){
  	this._tokenService.updatePassword({
    password:             this._registerData.password,
    passwordConfirmation: this._registerData.password,
    passwordCurrent:      this._registerData.passwordConfirmation,
		}).subscribe(
		    res =>      console.log(res),
		    error =>    console.log(error)
		);
  }

}
