import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Angular2TokenService, A2tUiModule } from 'angular2-token';

import { Property } from '../shared/property';
import { PropertiesService } from '../shared/property.service';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

	private properties: Property[] = [];
  private mapPins: Array<{ lat: number, lng: number, draggable: boolean, label: string, 
    icon: string, photo: string, price: number, id: any }> = [];

  private lat: number = -13.4963582;
  private lng: number = -69.8079044;
  private wishlist: any;

  constructor(private PropertiesService: PropertiesService, private route: ActivatedRoute, private usersService: UsersService, private _tokenService:  Angular2TokenService) { }

  ngOnInit() {
  
    // This function get all URL params of that component request 
    this.route
      .queryParams
      .subscribe( params => {
   
    	  // With the params caught from URL, let's put them as function params that search on own API 
      	this.PropertiesService.searchProperties(params)
        	.subscribe( data => {
            this.properties = data;
            this.mapPins = [];
            this.formateToMap();
          });
  	  });  

      if(this._tokenService.userSignedIn()) {
        this.usersService.getWishlist()
        .subscribe(data => { this.wishlist = data });
      }
  }

  wishlisted(id){
    if(this.wishlist) {
      for (var i = 0 ; i < this.wishlist.length ; i++) {
        if(this.wishlist[i]['property']['id'] == id){ return  true }
      }
    return false;
    }
  }

  // After get the properties array of the API, we need formate them inside of mapPin object to be displayed
  // on the map
  formateToMap(){
    let i = 0;
    for (let p of this.properties) {
      this.mapPins.push({
        id: p['property']['id'],
        lat: +p['property']['address']['latitude'],
        lng: +p['property']['address']['longitude'],
        draggable: false,
        price: p['property']['price'],
        icon: "http://bootcamp.onebitcode.com/wp-content/uploads/2017/01/b3.png",
        label: p['property']['name'], 
        photo: p['property']['photos'][0]

      });

      if(i ==0 ) {
        this.lat = +p['property']['address']['latitude'];
        this.lng = +p['property']['address']['longitude'];
      }

      i++;
    }
  }

}
