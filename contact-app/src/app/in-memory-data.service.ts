import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1234567890, name: 'Justin' },
      { id: 2345678901, name: 'Bella' },
      { id: 3456789012, name: 'Ethan' },
      { id: 4567890123, name: 'Maggie' },
      { id: 5678901234, name: 'Jacob' },
      { id: 6789012345, name: 'Sophie' },
      { id: 7890123456, name: 'Anna' },
      { id: 8901234567, name: 'Kyle' },
      { id: 9012345678, name: 'Julia' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
