/**
 * The App Component
 * 
 * The root of the application
 * Hosts the client user experience 
 */
// Import library
import {Component} from 'angular2/core';

// The decorator - What template use end hox to create the component
@Component({
  selector: 'hero-app',
  template: '<h1>{{titile}}</h1><h2>{{hero}} details</h2>'
})

// The class controls the appearance and behavior of view through its template
export class AppComponent {
  title = 'Tour of heroes';
  hero  = 'Magneto';
}
