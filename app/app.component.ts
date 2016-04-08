import {Component} from 'angular2/core';

@Component({
  selector: 'hero-app',
  template: '<h1>{{titile}}</h1><h2>{{hero}} details</h2>'
})

export class AppComponent {
  title = 'Tour of heroes';
  hero  = 'Magneto';
}
