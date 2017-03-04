import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Angular2TokenService, A2tUiModule } from 'angular2-token';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
 
@Injectable()
export class PropertiesService {
  // private url: string = "http://localhost:3000/api/v1/";

  constructor(private http: Http, private _tokenService: Angular2TokenService) { }


  addToWishlst(id){
    return this._tokenService.post("properties/" + id + "/wishlist",{})
    .map(res => res.json());
  }

  removeToWishlist(id){
    return this._tokenService.delete("properties/" + id + "/wishlist")
    .map(res => res.json())
  }

  autocomplete(){
    return this.http.get(environment.api_base_url + 'autocomplete.json')
    .map(res => res.json());
  }
  
  searchProperties(params){
    let parameters = new URLSearchParams();
    for (var f in params) { parameters.set(f, params[f]); }

    return this.http.get(environment.api_base_url + 'search.json', { search: parameters })
      .map( res => res.json());
  }

  getProperties(){
    return this.http.get(environment.api_base_url + 'properties.json')
      .map(res => res.json());
  }

  getHotProperties(){
    return this.http.get(environment.api_base_url + 'hot_properties.json')
      .map(res => res.json());
  }
 
  getProperty(id){
    return this.http.get(environment.api_base_url + 'properties/' + id + '.json')
      .map(res => res.json());
  }
 
  addProperty(property){
    return this.http.post(environment.api_base_url + 'properties.json', {'property': property})
      .map(res => res.json());
  }
 
  updateProperty(property){
    return this.http.put(environment.api_base_url + 'properties.json/' + property.id, {'property': property})
      .map(res => res.json());
  }
 
  deleteProperty(id){
    return this.http.delete(environment.api_base_url + 'properties.json/' + id)
      .map(res => res.json());
  }
}