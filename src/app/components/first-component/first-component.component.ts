import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  name: string = 'Vitor';
  age: number = 22;
  job: string = 'Developer';
  hobbies = ['correr', 'jogar', 'Estudar'];
  car = {
    name: 'BMW',
    year: '2020',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
