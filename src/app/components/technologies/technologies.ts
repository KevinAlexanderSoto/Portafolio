import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Technology {
  name: string;
  image: string;
}

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies.html',
  styles: ``,
})
export class Technologies {
  coreTechs: Technology[] = [
    { name: 'Kotlin', image: 'https://res.cloudinary.com/drx0n5wmw/image/upload/v1641436461/kotlin_lojw6n.jpg' },
    { name: 'Jetpack Compose', image: 'https://res.cloudinary.com/drx0n5wmw/image/upload/v1635082145/html_bootstrap_jvmzhx.png' }, // Using a placeholder for now
    { name: 'Swift (iOS)', image: 'https://res.cloudinary.com/drx0n5wmw/image/upload/v1641436329/java-logo_cmmu23.jpg' }, // Using a placeholder
    { name: 'Coroutines/Flow', image: 'https://res.cloudinary.com/drx0n5wmw/image/upload/v1631657360/node-js-_rdnhbw.png' } // Placeholder
  ];

  architectureSkills = [
    'Clean Architecture', 'MVVM / MVI', 'Modularization', 'SOLID Principles', 'TDD (JUnit, MockK)', 'CI/CD'
  ];
}
