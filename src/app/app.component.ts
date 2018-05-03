import { Component, Inject, AfterViewInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Chart } from 'chart.js';

declare var $:any;
declare var _:any;
declare var google:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  apiData = {
    currentData: [],
    currentData_width: 0,
    currentData_height: 0,
    numberOfCompartment: 0,
    erpUsers: { ho:0, mumbai:0, sing:0, chennai:0, dubai:0 },
    latLang: [],
    bioAuth: 0,
    idCards: 0,
    trackersDeployed: 0,
    realtimeData: 0,
    containerApproved: 0,
    packagesUnloaded: [],
    packagesUnloaded_width: 0,
    packagesUnloaded_height: 0,
    fieldOfficers: 0,
    securityUpdates: [],
    craneUsage: [],
    craneUsage_width: 0,
    craneUsage_height: 0,
    untitled: { clients:0, partners:0 }
  }

  map:any;
  markers = [];

  pieChart1; pieChart2; pieChart3;
  barChart1; barChart2; barChart3; barChart4;



  constructor( private http:HttpClient ) {}

  ngAfterViewInit() {
    var api = Observable.timer(0, 10000).subscribe(() => {
      this.http.get('api/data')
        .pipe(
          catchError( this.handleError('getHeroes', []) )
        )
        .subscribe( res => this.resolveApi(res) )
    })

    $(document).ready( () => { this.charts(); this.initMap(); this.initExp() } );

    $('#grid1').gridstack({
      animate: true,
      disableResize : true
    });
  }



  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }



  charts() {
    this.pieChart1 = new Chart($('#pie-chart1'), {
      type: 'pie',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green"],
        datasets: [{
          label: '# of Containers',
          data: [0, 0, 0, 0],
          backgroundColor: ['#4f81bcd1', '#c0504ed1', '#9bbb58d1', '#8165a2d1'],
          hoverBackgroundColor: ['#4f81bc', '#c0504e', '#9bbb58', '#8165a2']
        }]
      },
      options: {
        legend: {
          position: 'right'
        }
      }
    });

    this.barChart1 = new Chart($('#bar-chart1'), {
      type: 'bar',
      data: {
        labels: ['x1','x2','x3','x4','x5','x6','x7','x8','x9','x10','x11','x12','x13','x14','x15','x16'],
        datasets: [{
          label: '# of Container',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          backgroundColor: ['#e83323d1', '#ea642bd1', '#ef9d38d1', '#f7d247d1', '#f9fe53d1', '#b0de45d1', '#67d33ed1', '#428fcfd1', '#2052d1d1', '#2b17d0d1', '#2b17d0d1', '#ce2e74d1', '#764cecd1', '#ddddddd1', '#999999d1', '#333333d1'],
          hoverBackgroundColor: ['#e83323', '#ea642b', '#ef9d38', '#f7d247', '#f9fe53', '#b0de45', '#67d33e', '#428fcf', '#2052d1', '#2b17d0', '#2b17d0', '#ce2e74', '#764cec', '#dddddd', '#999999', '#333333']
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              max: 4500
            }
          }]
        }
      }
    });

    this.barChart2 = new Chart($('#bar-chart2'), {
      type: 'horizontalBar',
      data: {
        labels: ['0', '01', '02', '03', '04'],
        datasets: [{
          label: 'Total Regions',
          data: [0, 0, 0, 0, 0],
          backgroundColor: ['#fff', '#494e8dd1', '#4387a2d1', '#55af8ad1', '#87bc55d1'],
          hoverBackgroundColor: ['#fff', '#494e8d', '#4387a2', '#55af8a', '#87bc55']
        }]
      },
      options: {
        scales: {
          xAxes: [{
            ticks: {
              max: 100,
              min: 0,
              stepSize: 10,
              callback: function(value, index, values) {
                return value + '%';
              }
            },
            gridLines: {
              borderDash: [2, 2, 2],
              color: 'rgba(0,0,0,0.3)'
            },
            position: 'top'
          }],
          yAxes: [{
            ticks: {
              callback: function(value, index, values) {
                if(value == 0) { return null };
                return value
              },
              mirror: true,
              fontColor: '#000',
              fontSize: 20,
              padding: -10
            }
          }]
        },
        legend: {
          display: false
        }
      }
    });

    this.barChart3 = new Chart($('#bar-chart3'), {
      type: 'horizontalBar',
      data: {
        labels: ['0', '01', '02', '03', '04'],
        datasets: [{
          label: 'Vouchers Usage',
          data: [0, 0, 0, 0, 0],
          backgroundColor: ['#fff', '#494e8dd1', '#4387a2d1', '#55af8ad1', '#87bc55d1'],
          hoverBackgroundColor: ['#fff', '#494e8d', '#4387a2', '#55af8a', '#87bc55']
        }]
      },
      options: {
        scales: {
          xAxes: [{
            ticks: {
              max: 100,
              min: 0,
              stepSize: 10,
              callback: function(value, index, values) {
                return value + '%';
              }
            },
            gridLines: {
              borderDash: [2, 2, 2],
              color: 'rgba(0,0,0,0.3)'
            },
            position: 'top'
          }],
          yAxes: [{
            ticks: {
              callback: function(value, index, values) {
                if(value == 0) { return null };
                return value
              },
              mirror: true,
              fontColor: '#000',
              fontSize: 20,
              padding: -10
            }
          }]
        },
        legend: {
          display: false
        }
      }
    })

    this.barChart4 = new Chart($('#bar-chart4'), {
      type: 'bar',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
          label: 'File Approved',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          backgroundColor: ['#8a9db0d1', '#a68934d1', '#a68934d1', '#a66d45d1', '#306566d1', '#883d3ad1', '#5e3a64d1', '#4c612dd1', '#7e7928d1', '#306892d1', '#641918d1', '#716484d1'],
          hoverBackgroundColor: ['#8a9db0', '#a68934', '#a68934', '#a66d45', '#306566', '#883d3a', '#5e3a64', '#4c612d', '#7e7928', '#306892', '#641918', '#716484']
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              max: 40,
              min: 0,
              callback: function(value, index, values) {
                return value + 'M'
              }
            }
          }]
        }
      }
    });

    this.pieChart2 = new Chart($('#pie-chart2'), {
      type: 'pie',
      data: {
        labels: ["Loaded", "Unloaded", "Rejected", "Wasted"],
        datasets: [{
          label: '# of Containers',
          data: [0, 0, 0, 0],
          backgroundColor: ['#4f81bcd1', '#c0504ed1', '#9bbb58d1', '#8165a2d1'],
          hoverBackgroundColor: ['#4f81bc', '#c0504e', '#9bbb58', '#8165a2']
        }]
      },
      options: {
        legend: {
          display: false
        }
      }
    });

    this.pieChart3 = new Chart($('#pie-chart3'), {
      type: 'pie',
      data: {
        labels: ["Loaded", "Unloaded", "Rejected", "Wasted"],
        datasets: [{
          label: '# of Containers',
          data: [0, 0, 0, 0],
          backgroundColor: ['#4f81bcd1', '#c0504ed1', '#9bbb58d1', '#8165a2d1'],
          hoverBackgroundColor: ['#4f81bc', '#c0504e', '#9bbb58', '#8165a2']
        }]
      },
      options: {
        legend: {
          display: false
        }
      }
    });
  }



  initMap() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -24.397, lng: 130.644 },
      zoom: 4,
      streetViewControl: false
    });

    this.gridStackConflict();
  }



  // resolves the inability to drag the map without dragging the widget
  gridStackConflict() {
    $('#map').hover(
      () => $('.grid-stack').data('gridstack').disable(),
      () => $('.grid-stack').data('gridstack').movable('.grid-stack-item', true)
    );
  }



  initExp() {
    this.apiData.currentData_width = $('.grid-stack-item').find('.grid-stack-item-content[data-current-data]').width()
    this.apiData.currentData_height = $('.grid-stack-item').find('.grid-stack-item-content[data-current-data]').height()

    this.apiData.packagesUnloaded_width = $('.grid-stack-item').find('.grid-stack-item-content[data-packages-unloaded]').width()
    this.apiData.packagesUnloaded_height = $('.grid-stack-item').find('.grid-stack-item-content[data-packages-unloaded]').height()

    this.apiData.craneUsage_width = $('.grid-stack-item').find('.grid-stack-item-content[data-crane-usage]').width()
    this.apiData.craneUsage_height = $('.grid-stack-item').find('.grid-stack-item-content[data-crane-usage]').height()

    //style work on the horizontal expansion elements
    let expWidth = $('.grid-stack-item').find('.grid-stack-item-content[data-exp-width]')

    _.forEach(expWidth, (el) => {

      $(el).children('.exp-card').width( $(el).width() );
      $(el).children('.exp-card').height( $(el).height() );
      let i = 0;
      _.forEach($(el).children('.exp-card'), (cardEl) => {
        $(cardEl).css('left', $(el).width()*i + i*24);
        i++
      });

    });

    //click event on horizontal expansion elements
    $('.grid-stack-item').find('.grid-stack-item-content[data-exp-width]').find('.exp').on('click', function(ev) {
      let grid = $('.grid-stack').data('gridstack');
      let el = $(this).parents('.grid-stack-item');
      let expWidth = $(this).parents('.grid-stack-item-content').data('exp-width');
      let orgnWidth = $(this).parents('.grid-stack-item-content').data('orgn-width');

      //needs to expand
      if($(this).hasClass('icon-expand')) {
        $(this).removeClass('icon-expand').addClass('icon-compress');
        // $(this).parents('.grid-stack-item-content').css('overflow-x', 'scroll');
        grid.resize(el, expWidth*orgnWidth);

      //needs to contract
      } else {
        $(this).removeClass('icon-compress').addClass('icon-expand');
        // $(this).parents('.grid-stack-item-content').css('overflow-x', 'hidden');
        grid.resize(el, orgnWidth);
      }
    });
  }



  resolveApi(res) {
    _.forEach(res, data => {

      switch (data.name) {
        case 'Current Data':
          this.apiData.currentData = data.val;
          break;

        case 'Number of Compartment':
          this.apiData.numberOfCompartment = data.val;
          break;

        case 'Pie-No of Containers':
          this.pieChart1.data.datasets[0].data = data.val;
          this.pieChart1.update();
          break;

        case 'Bar-No of Containers':
          this.barChart1.data.datasets[0].data = data.val;
          this.barChart1.update();
          break;

        case 'Bar-Total Divisions':
          this.barChart2.data.datasets[0].data = data.val;
          this.barChart2.update();
          break;

        case 'ERP Active Users':
          this.apiData.erpUsers = data.val;
          break;

        case 'ERP Access Locations':
          this.apiData.latLang = data.val;
          this.updateMarkers();
          break;

        case 'Vouchers Usage':
          this.barChart3.data.datasets[0].data = data.val;
          this.barChart3.update();
          break;

        case 'Users using Bio Auth':
          this.apiData.bioAuth = data.val;
          break;

        case 'Users using ID Cards':
          this.apiData.idCards = data.val;
          break;

        case 'Trackers Deployed':
          this.apiData.trackersDeployed = data.val;
          break;

        case 'Real time data points':
          this.apiData.realtimeData = data.val;
          break;

        case 'File Approved Today':
          this.barChart4.data.datasets[0].data = data.val;
          this.barChart4.update();
          break;

        case 'Container Forwarding Approved':
          this.apiData.containerApproved = data.val;
          break;

        case 'Packages unloaded':
          this.apiData.packagesUnloaded = data.val;
          break;

        case 'No of Containers':
          this.pieChart2.data.datasets[0].data = data.val;
          this.pieChart2.update();
          break;

        case 'No of Packages':
          this.pieChart3.data.datasets[0].data = data.val;
          this.pieChart3.update();
          break;

        case 'On Field Officers':
          this.apiData.fieldOfficers = data.val;
          break;

        case 'Security Setting Updates':
          this.apiData.securityUpdates = data.val;
          break;

        case 'Crane Usage':
          this.apiData.craneUsage = data.val;
          break;

        case 'untitled':
          this.apiData.untitled = data.val;
          break;

        default:
          console.error('API data is not structured as it was designed for this app')
          console.log( data.name )
          break;
      }

    });
  }



  updateMarkers() {
    for(let i=0; i<this.markers.length; i++) {
      this.markers[i].setMap(null);
    }
    this.markers = []

    for(let i=0; i<this.apiData.latLang.length; i++) {
      let marker = new google.maps.Marker({
        position: new google.maps.LatLng( this.apiData.latLang[i][0], this.apiData.latLang[i][1] ),
        map: this.map,
        label: (i+1).toString()
      });

      this.markers.push(marker);
    }
  }

}
