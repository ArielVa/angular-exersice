import {Component, Input, OnInit} from '@angular/core';
import {CellStatus} from "../../entities/cell-status";
import {Cell} from "../../entities/cell";

@Component({
  selector: 'app-content-cell',
  templateUrl: './content-cell.component.html',
  styleUrls: ['./content-cell.component.css']
})
export class ContentCellComponent implements OnInit {

  @Input()
  cell!: Cell;

  constructor() { }

  ngOnInit(): void {
  }

}
