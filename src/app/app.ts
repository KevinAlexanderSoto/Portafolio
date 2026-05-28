import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Technologies } from './components/technologies/technologies';
import { Experience } from './components/experience/experience';
import { Portfolio } from './components/portfolio/portfolio';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Technologies, Experience, Portfolio, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'Portafolio | Kevin Alexander';
}
