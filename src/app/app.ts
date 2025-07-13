import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Homepage} from './components/homepage/homepage';
import {Navigation} from './components/navigation/navigation';
import {Products} from './components/products/products';
import {Footer} from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Homepage,
    Navigation,
    Products,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'NeptyAI_landing_page';
}
