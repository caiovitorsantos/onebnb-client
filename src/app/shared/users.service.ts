import { Injectable } from '@angular/core';
import { Http, URLSearchParams }  from '@angular/http';
import { Angular2TokenService, A2tUiModule } from 'angular2-token';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';



@Injectable()
export class UsersService {

  constructor(private http: Http, private _tokenService: Angular2TokenService) { }

  getWishlist(){
  	return this._tokenService.get('users/wishlist', {})
  		.map(res => res.json())
  }
}
