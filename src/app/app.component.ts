import { Component, Inject, AfterViewInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chart } from 'chart.js';

declare var $:any;
declare var _:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor( private http:HttpClient ) {}

  ngAfterViewInit() {
    this.http.get('api/items').subscribe( res => console.log(res) );

    $(document).ready( () => this.charts() );

    $('#grid1').gridstack({
      animate: true,
      disableResize : true
    });
  }



  charts() {
    let pieChart1 = new Chart($('#pie-chart1'), {
      type: 'pie',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green"],
        datasets: [{
          label: '# of Containers',
          data: [35, 20, 30, 15],
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

    let barChart1 = new Chart($('#bar-chart1'), {
      type: 'bar',
      data: {
        labels: ['x1','x2','x3','x4','x5','x6','x7','x8','x9','x10','x11','x12','x13','x14','x15','x16'],
        datasets: [{
          label: '# of Container',
          data: [4000, 2000, 1900, 1500, 1400, 1300, 1200, 1000, 800, 700, 600, 500, 400, 300, 200, 100],
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

    let barChart2 = new Chart($('#bar-chart2'), {
      type: 'horizontalBar',
      data: {
        labels: ['0', '01', '02', '03', '04'],
        datasets: [{
          label: 'Total Regions',
          data: [0, 70, 90, 60, 100],
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

    let barChart3 = new Chart($('#bar-chart3'), {
      type: 'horizontalBar',
      data: {
        labels: ['0', '01', '02', '03', '04'],
        datasets: [{
          label: 'Vouchers Usage',
          data: [0, 70, 90, 60, 100],
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

    let barChar4 = new Chart($('#bar-chart4'), {
      type: 'bar',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
          label: 'File Approved',
          data: [23.35, 23.46, 37.07, 24.1, 31.54, 24.97, 31.52, 27.01, 27.27, 24.45, 26.26, 23.2],
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

    let pieChart2 = new Chart($('#pie-chart2'), {
      type: 'pie',
      data: {
        labels: ["Loaded", "Unloaded", "Rejected", "Wasted"],
        datasets: [{
          label: '# of Containers',
          data: [35, 20, 30, 15],
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

    let pieChart3 = new Chart($('#pie-chart3'), {
      type: 'pie',
      data: {
        labels: ["Loaded", "Unloaded", "Rejected", "Wasted"],
        datasets: [{
          label: '# of Containers',
          data: [35, 20, 30, 15],
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



  /*
    //grid-items Event listners
    //--looking for expandables
    $('#grid1').on('added', function(event, items) {
      _.each(items, (item) => {

        $(item.el[0]).find('.exp-true').on('click', function() {
          let grid = $('.grid-stack').data('gridstack');
          let el = $(this).parents('.grid-stack-item');
          let el_width = el.data('gs-width');
          let el_height = el.data('gs-height');

          if(el.find('.icon-expand').length > 0) {
            el.find('.icon-expand').removeClass('icon-expand').addClass('icon-compress');
            grid.resize(el, (el_width+2), (el_height+2));
          } else {
            el.find('.icon-compress').addClass('icon-expand').removeClass('icon-compress');
            grid.resize(el, (el_width), (el_height));
          }

        })

      });
    }
  */

}
