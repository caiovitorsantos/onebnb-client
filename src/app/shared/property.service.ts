import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
 
@Injectable()
export class PropertiesService {
  private url: string = "http://localhost:3000/api/v1/properties.json";
 
  constructor(private http: Http) { }
 
  getProperties(){
    return this.http.get(this.url)
      .map(res => res.json());
  }
 
  getProperty(id){
    return this.http.get(this.url + '/' + id)
      .map(res => res.json());
  }
 
  addProperty(property){
    return this.http.post(this.url, {'property': property})
      .map(res => res.json());
  }
 
  updateProperty(property){
    return this.http.put(this.url + '/' + property.id, {'property': property})
      .map(res => res.json());
  }
 
  deleteProperty(id){
    return this.http.delete(this.url + '/' + id)
      .map(res => res.json());
  }
}