import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let data = [
      {
        id: 1,
        name: 'Current Data',
        val: [ {name: 'Current Data', val: 127}, {name: 'Old Data', val:117}, {name: 'New Data', val: 10} ]
      },
      {
        id: 2,
        name: 'Number of Compartment',
        val: 21
      },
      {
        id: 3,
        name: 'Pie-No of Containers',
        val: [35, 20, 30, 15]
      },
      {
        id: 4,
        name: 'Bar-No of Containers',
        val: [4000, 2000, 1900, 1500, 1400, 1300, 1200, 1000, 800, 700, 600, 500, 400, 300, 200, 100]
      },
      {
        id: 5,
        name: 'Bar-Total Divisions',
        val: [0, 70, 90, 60, 100]
      },
      {
        id: 6,
        name: 'ERP Active Users',
        val: { ho: 127, mumbai: 99, sing: 10, chennai: 101, dubai: 87 }
      },
      {
        id: 7,
        name: 'ERP Access Locations',
        val: [ [-34.397, 150.644], [-30.397, 150.644], [-20.397, 140.644], [-31.397, 130.644], [-21.397, 120.644] ]
      },
      {
        id: 8,
        name: 'Vouchers Usage',
        val: [0, 70, 90, 60, 100]
      },
      {
        id: 9,
        name: 'Users using Bio Auth',
        val: 20
      },
      {
        id: 10,
        name: 'Users using ID Cards',
        val: 109
      },
      {
        id: 11,
        name: 'Trackers Deployed',
        val: 150
      },
      {
        id: 12,
        name: 'Real time data points',
        val: 11
      },
      {
        id: 13,
        name: 'File Approved Today',
        val: [23.35, 23.46, 37.07, 24.1, 31.54, 24.97, 31.52, 27.01, 27.27, 24.45, 26.26, 23.2]
      },
      {
        id: 14,
        name: 'Container Forwarding Approved',
        val: 2
      },
      {
        id: 15,
        name: 'Packages unloaded',
        val: [ {name: 'Packages loaded', val: 127}, {name: 'Packages unloaded', val:349}, {name: 'total Packages', val: 476} ]
      },
      {
        id: 16,
        name: 'No of Containers',
        val: [35, 20, 30, 15]
      },
      {
        id: 17,
        name: 'No of Packages',
        val: [35, 20, 30, 15]
      },
      {
        id: 18,
        name: 'On Field Officers',
        val: 9
      },
      {
        id: 19,
        name: 'Security Setting Updates',
        val: [
          {event: 'User', name: 'pramod sharma', action: 'deleted', date: 'Yesterday, 19:20'},
          {event: 'Added', name: 'rohan patil', action: 'to group Staff', date: 'Today, 11:34'},
          {event: 'Saw', name: 'vinay gupta', action: 'password', date: 'Today, 13:03'},
          {event: 'User', name: 'pramod sharma', action: 'deleted', date: 'Yesterday, 19:20'}
        ]
      },
      {
        id: 20,
        name: 'Crane Usage',
        val: [ {name: 'rajesh', val: '22'}, {name: 'rohan', val: '10'} ]
      },
      {
        id: 21,
        name: 'untitled',
        val: {clients: '3', partners: '7'}
      }
    ];

    return { data };
  }

}
