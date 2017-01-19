import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _tokenService: Angular2TokenService) { }

  ngOnInit() {
  }

  public items: string[] = ['The first choice!', 'And  another choice for you.', 'but wait! A third!'];

  public toggled(open: boolean): void{  }

  public collapsed(event: any): void {  }

  public expanded(event: any): void {  }


  signOut(){
  	this._tokenService.signOut().subscribe(
  		res => console.log(res),
  		error => console.log(error)
  		);
  }


}
