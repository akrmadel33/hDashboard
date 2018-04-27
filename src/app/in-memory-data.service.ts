import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  /***
  Key [type]
    1 => simple numbers
  ***/

  createDb() {
    let items = [
      {
        id: 1,
        type: 1,
        label: 'Current Data',
        data: 127,
        expandable: true,
        x: 0,
        y: 0,
        width: 2,
        height: 3
      },
      {
        id: 2,
        type: 1,
        label: 'Number of Compartment Users',
        data: 20,
        expandable: false,
        x: 0,
        y: 3,
        width: 2,
        height: 4
      }
    ];

    return { items };
  }

}
