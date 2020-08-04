import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  public InputType: string = 'text';

  name: string;
  constructor() { 
  }

  ngOnInit(): void {
  }

  public changeText(event: string): void
  {
    this.name = event;
  }

}
