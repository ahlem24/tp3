import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {

  constructor() { }
  @Input() nom:string;
  @Input() ref:string;
  @Input() prix:number;
  @Input() repare:string;


  
  ngOnInit() {
  }

}
