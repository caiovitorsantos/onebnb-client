import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-box',
  templateUrl: './reservation-box.component.html',
  styleUrls: ['./reservation-box.component.scss']
})
export class ReservationBoxComponent implements OnInit {

	public begindate: Date = new Date();
	public enddate: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
