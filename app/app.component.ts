/**
 * The App Component
 * 
 * The root of the application
 * Hosts the client user experience 
 */
// Import library
import {Component} from 'angular2/core';

// Hero class
export class Hero {
  id:   number;
  name: string;
}

// The decorator - What template use end hox to create the component
@Component({
  selector: 'hero-app',
  template: `
            <h1>{{title}}</h1>
            <h2>{{hero.name}} details</h2>
            <div><label>id: </label>{{hero.id}}</div>
            <div><label>name: </label><input [(ngModel)]="hero.name" placeholder="name"></div>
            `
})

// The class controls the appearance and behavior of view through its template
export class AppComponent {
  // Titile of the page
  title = 'Tour of heroes';
  
  // Hero property
  hero: Hero = {
    id: 1,
    name: 'Magneto'
  };
}
