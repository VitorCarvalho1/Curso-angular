import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  size: number = 40;
  font: string = 'Arial';
  color: string = 'red';

  classes = ['green-title', 'small-title'];
  underline: string = 'underline-title';
  constructor() { }

  ngOnInit(): void {
  }

}
