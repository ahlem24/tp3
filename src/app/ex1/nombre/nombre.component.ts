import { Component, OnInit, Input } from '@angular/core';
import { TableauComponent } from '../tableau/tableau.component';

@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['./nombre.component.css']
})
export class NombreComponent implements OnInit {
@Input() i:number;
@Input() val:number;
  
  constructor() { }

  ngOnInit() {
  }

}
