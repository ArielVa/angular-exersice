import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat-display',
  templateUrl: './stat-display.component.html',
  styleUrls: ['./stat-display.component.css']
})
export class StatDisplayComponent implements OnInit {

  @Input()
  icon!: string;

  @Input()
  num!: number;

  @Input()
  text!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
