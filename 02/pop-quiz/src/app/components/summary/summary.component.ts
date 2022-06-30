import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../../utils/Question";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  @Input()
  answeredQuestions: Question[] = [];

  constructor() { }

  ngOnInit(): void {
  }



}
