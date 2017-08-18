import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	private title = "My Website";

	private item1 = "Page 1";
	private item2 = "Page 2";

  constructor() { }

  ngOnInit() {
  }

}
