import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styles: ``,
})
export class Footer {
  currentYear: number = new Date().getFullYear();
}
