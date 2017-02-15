import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PropertiesService } from '../../shared/property.service';
import { Property } from '../../shared/property';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {

  constructor(private propertiesService: PropertiesService, private route: ActivatedRoute, private router: Router) { }

  private property: Property;
  private photos: any = [];
  private details: any = [];
  private facilities: any = [];
  private address: any = [];
  private comments: any = [];
  private profile: any = [];
  private lat: number = 0;
  private lng: number = 0;

  ngOnInit() {
  	this.route.params.subscribe(
  		params => {
  			this.propertiesService.getProperty(params['id']).subscribe(
  				data => { 
            this.property   = data;
            this.photos     = data.property.photos;
            this.comments   = data.property.comments;
            this.profile    = data.property.user;
            this.details    = data.property;
            this.address    = data.address ;
            this.facilities = data.property.facility;
            this.lat        = +data.property.address.latitude;
            this.lng        = +data.property.address.longitude;
           },
  				err => { this.router.navigateByUrl('/404');
  			});
  		});

  }

}
