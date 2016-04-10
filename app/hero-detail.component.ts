import {Component, Input} from 'angular2/core';
import {Hero} from './hero';

@Component({
  selector: 'hero-detail',
  template:`
          <div *ngIf="hero">
            <h2>{{hero.name}} details!</h2>
            <div><label>id: </label>{{hero.id}}</div>
            <div>
              <label>name: </label></div>
              <input [(ngModel)]="hero.name" placeholder="name">
          </div>
          `       
})

export class HeroDetailComponent {
  @Input()
  hero: Hero;
}