import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Actor } from '../Actor';

@Component({
  selector: 'app-actor-list',
  standalone: false,
  templateUrl: './actor-list.component.html',
  styleUrl: './actor-list.component.css',
})
export class ActorListComponent implements OnChanges {
  @Input() actors: Actor[] = [];
  popularity: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['actors'] && this.actors) {
      this.averagePopularity();
    }
  }

  averagePopularity() {
    if (!this.actors || this.actors.length === 0) {
      this.popularity = 0;
      return;
    }

    let amount = 0;

    this.actors.forEach((actor) => {
      amount += actor.popularity;
    });

    this.popularity = amount / this.actors.length;
  }
}
