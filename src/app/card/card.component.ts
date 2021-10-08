import { Component, OnInit } from '@angular/core';
export interface Tile {
  title:string;
  count:number;
  cols: number;
  rows: number;
 
 
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tiles:Tile[]=[
    {title:"Total vaccination doses",count:32145,cols:2,rows:1},
    {title:"Dose 1",count:32145,cols:1,rows:1},
    {title:"Dose 2",count:32145,cols:1,rows:1},
  ]

  

}
