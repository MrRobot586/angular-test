import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CharacterData } from '../../models/character-data';
@Component({
  selector: 'app-data-details',
  templateUrl: './data-details.component.html',
  styleUrls: ['./data-details.component.css']
})
export class DataDetailsComponent implements OnInit {

  @Input() Char!:CharacterData;
  @Input() DetailsToggle!:Boolean;
  @Output() Details = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
