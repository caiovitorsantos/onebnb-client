import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-detail-box',
  templateUrl: './user-detail-box.component.html',
  styleUrls: ['./user-detail-box.component.scss']
})
export class UserDetailBoxComponent implements OnInit {

	@Input() name: any;
	@Input() photo: any;
	@Input() address: any;
	@Input() userid: any;

  constructor() { }

  ngOnInit() {
  }

}
