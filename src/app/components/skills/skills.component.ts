import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    
    { name: 'JavaScript', rating: 4, stars: [1, 2, 3, 4, 5] },
    { name: 'React', rating: 4, stars: [1, 2, 3, 4, 5] },
    { name: 'Angular', rating: 2, stars: [1, 2, 3, 4, 5] },
    { name: 'Wordpress', rating: 4, stars: [1, 2, 3, 4, 5] },

   
  ];

  showRating(skill: any): void {
    
    skill.tempRating = skill.rating;
    skill.rating = skill.stars.length;
  }

  hideRating(skill: any): void {
    skill.rating = skill.tempRating;
  }
}
