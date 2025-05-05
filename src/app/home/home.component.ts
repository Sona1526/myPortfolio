import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyprojectsComponent } from "../myprojects/myprojects.component";
@Component({
  selector: 'app-home',
  imports: [CommonModule, MyprojectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  skills =  [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 90 },
      { name: 'JavaScript', level: 75 },
      { name: 'TypeScript', level: 50 },
      { name: 'JQuery', level: 75 },
      { name: 'Bootstrap', level: 75 },
      { name: 'PHP', level: 90 },
      { name: 'SQL', level: 90 },
    ];

    frameworks =  [
      { name: 'Angular', level: 75 },
      { name: 'LARAVEL', level: 75 }
    ];
    applications =  [
      { name: 'word', level: 75 },
      { name: 'Excel', level: 75 }
    ];
}
