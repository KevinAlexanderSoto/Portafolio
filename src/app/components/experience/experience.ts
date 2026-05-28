import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Job {
  company: string;
  role: string;
  period: string;
  description: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styles: [`
    .experience-item {
      border-left: 2px solid #0196FF;
      padding-left: 20px;
      position: relative;
    }
    .experience-item::before {
      content: '';
      position: absolute;
      width: 12px;
      height: 12px;
      background: #0196FF;
      border-radius: 50%;
      left: -7px;
      top: 5px;
    }
  `]
})
export class Experience {
  jobs: Job[] = [
    {
      company: 'Mercado Libre',
      role: 'Android Software Engineer',
      period: 'Oct 2024 – Present',
      description: [
        'Spearheaded the evolution of the mobile Error Handler SDK.',
        'Streamlined feature implementation using AI coding assistants (Claude Code).',
        'Architected dynamic deep link implementations for systemic failures.',
        'Reduced ANR rates and migrated codebase to Kotlin Coroutines 1.9.0.',
        'Contributed to iOS repository (Swift) to achieve feature parity.'
      ]
    },
    {
      company: 'SETI',
      role: 'Mobile Application Developer',
      period: 'Nov 2023 – Oct 2024',
      description: [
        'Engineered custom native Cordova plugins for Android and iOS.',
        'Led feature development and refactoring for core B2C hybrid applications.'
      ]
    },
    {
      company: 'SKG Tecnología',
      role: 'Mobile Application Developer',
      period: 'Jul 2023 – Nov 2023',
      description: [
        'Built a new offline-first application from scratch using Modern Android standards.',
        'Implemented secure SSO authentication using AppAuth SDK.'
      ]
    },
    {
      company: 'Sophos Solutions',
      role: 'Android Engineer',
      period: 'Feb 2022 – Jul 2023',
      description: [
        'Delivered the MVP of a core mobile banking application using Backbase.',
        'Certified Backbase Engineer.'
      ]
    }
  ];
}
