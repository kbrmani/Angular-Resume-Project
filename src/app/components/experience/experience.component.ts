import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  jobs: { title: string, company: string, duration: string }[] = []; 
  constructor() { }

  ngOnInit(): void {
    this.jobs = [
      { title: 'Software Engineer', company: 'SoftTech Corp.', duration: 'August 2024 - Present' },
      { title: 'Intern Developer', company: 'Dev Studio', duration: 'January 2022 - May 2023' }
    ];
  }

  openModal(job: { title: string, company: string, duration: string }): void {
    
    alert(`Details for ${job.title} at ${job.company}: Duration - ${job.duration}`);
  }
}
