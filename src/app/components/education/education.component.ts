import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educations: { degree: string, institution: string, graduationDate: string }[] = []; 

  constructor() { }

  ngOnInit(): void {
    this.educations = [
      { degree: 'B.tech in Computer Science', institution: 'Pdm University', graduationDate: 'May 2022' },
      { degree: 'M.tech in Software Engineering', institution: 'Pdm University', graduationDate: 'May 2024' }
    ];
  }
}
