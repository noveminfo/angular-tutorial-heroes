import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  // providers: [HeroService],
})
export class HeroesComponent implements OnInit {
  heros: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {}

  getHeroes() {
    this.heroService.getHeroes().subscribe((heroes) => (this.heros = heroes));
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
