import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
names : string[];
  constructor() {
  this.names = ["Knrt","dude","is","awesome"];
}

  ngOnInit() {
  }

}
