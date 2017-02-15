import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

 	@Input() lat: number;
  @Input() lng: number;
  @Input() public mapPins: Array<{lat: number, lng: number, draggable: boolean, label: string, icon: string,
  	photo: string, price: number, id: any}>;

  constructor() { }

  ngOnInit() {
  }

}
