import { Component, OnInit } from '@angular/core';
import { Property } from '../shared/property';
import { PropertiesService } from '../shared/property.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private properties: Property[] = [];

  constructor(private propertiesService: PropertiesService) { }

  ngOnInit() {
  	this.propertiesService.getProperties()
  	.subscribe(data => { this.properties = data });
  }

}
