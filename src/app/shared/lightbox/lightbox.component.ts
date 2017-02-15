import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent implements OnInit {

	@Input() photos: any;
	
  constructor() { }

  ngOnInit() {
  }

}
