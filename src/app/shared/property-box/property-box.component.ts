import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-property-box',
  templateUrl: './property-box.component.html',
  styleUrls: ['./property-box.component.scss']
})
export class PropertyBoxComponent implements OnInit {

	public wishlisted: boolean = false;

  @Input() photo: string;
  @Input() name: string;
  @Input() price: string;
  @Input() stars: string;
  @Input() whish: string;
  @Input() property_id: string;

  constructor() { }

  ngOnInit() {
  }

  wishlist(status, property_id){
  	console.log(status);
  	this.wishlisted = status;
  }

}
