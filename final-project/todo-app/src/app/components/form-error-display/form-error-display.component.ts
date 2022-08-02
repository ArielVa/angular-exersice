import {Component, Input, OnInit} from '@angular/core';
import {ValidationErrors} from "@angular/forms";

@Component({
  selector: 'app-form-error-display',
  templateUrl: './form-error-display.component.html',
  styleUrls: ['./form-error-display.component.css']
})
export class FormErrorDisplayComponent implements OnInit {

  @Input()
  errors: ValidationErrors | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
