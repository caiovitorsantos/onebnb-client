import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, URLSearchParams } from '@angular/http';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

	@Input() totalItems: number;
	public currentPage: number = 1;

	setpage(pageNo: number): void {
			this.currentPage = pageNo;
	}

	public pageChange(event){
		this.route.queryParams.subscribe( params => {
			let parameters = new URLSearchParams();
			for(var f in params)
				if(f != 'page') {
					parameters.set(f, params[f]);
				};
			this.router.navigateByUrl('results?page=' + event.page + "&" +parameters.toString());
		});
	}

  ngOnInit() {
  	this.route.queryParams.subscribe( params => {
  		if(params["page"] != "")
  			this.currentPage = +params["page"];
  		else	
  			this.currentPage = 1;
  	});
  }

}
