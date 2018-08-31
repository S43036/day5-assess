import { Component, OnInit, Input, EventEmitter } from '@angular/core';


export interface LineItem {
  albumName: string;
  artistName: string;
  urlName: string;
  rating: number;
  quantity: number;
}


@Component({
  selector: 'app-lp-entry',
  templateUrl: './lp-entry.component.html',
  styleUrls: ['./lp-entry.component.css']
})
export class LpEntryComponent implements OnInit {



  
  
  constructor() { }

  ngOnInit() {}

  
  }
