import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {
  hobbies: string[] = []; 

  constructor() { }

  ngOnInit(): void {
    this.hobbies = [
      'Reading', 
      'Traveling',
      'Photography',
      'Gardening'
    ];
  }
}
