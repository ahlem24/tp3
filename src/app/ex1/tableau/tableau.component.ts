import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {

  constructor() { }
  indice:number;
  val:number;
  tab=[10,20,30,40]
  ngOnInit() {
  }

}
