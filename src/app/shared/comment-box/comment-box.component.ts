import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.scss']
})
export class CommentBoxComponent implements OnInit {

	@Input() photo: any;
	@Input() name: any;
	@Input() body: any;
	@Input() date: any;

  constructor() { }

  ngOnInit() {
  }

}
