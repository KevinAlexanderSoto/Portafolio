import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  category: string;
  image: string;
  link?: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styles: ``,
})
export class Portfolio {
  projects: Project[] = [
    {
      title: 'Dogs collection',
      category: 'Android App, MVVM, Hilt, Retrofit, XML y Compose',
      image: 'images/dogCollection.png',
      link: 'https://github.com/KevinAlexanderSoto/SP_Android_APP'
    },
    {
      title: 'SP-Aplication',
      category: 'APP nativa Android, con Kotlin y Jetpack Compose',
      image: 'https://res.cloudinary.com/drx0n5wmw/image/upload/v1641430289/SP-APLICATION_wvebz9.png',
      link: 'https://github.com/KevinAlexanderSoto/SP_Android_APP'
    },
    {
      title: 'Rest-APP',
      category: 'API-Admin citas GIM',
      image: 'https://res.cloudinary.com/drx0n5wmw/image/upload/v1634767531/fondo_citas_gim_ehevrn.png',
      link: 'https://github.com/KevinAlexanderSoto/APP_citas_gim'
    },
    {
      title: 'Portafolio',
      category: 'landing page con bootstrap y Scss',
      image: 'https://res.cloudinary.com/drx0n5wmw/image/upload/v1641429054/portfolio-img_rttb6w.png',
      link: 'https://github.com/KevinAlexanderSoto/Did_Aplication'
    },
    {
      title: 'ToDid APP',
      category: 'Aplicación de consola',
      image: 'https://res.cloudinary.com/drx0n5wmw/image/upload/v1632522439/proyecto1_inwrxo.jpg',
      link: 'https://github.com/KevinAlexanderSoto/Did_Aplication'
    },
    {
      title: 'Dame un reto',
      category: 'Sugiere un proyecto digno de estar aqui ;)',
      image: 'images/logo2.png'
    }
  ];
}
