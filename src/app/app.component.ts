import { Component } from '@angular/core';
import {ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("main").style.opacity = "0.4";

    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  public closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("main").style.opacity = "1";    
  }
  //ng2-charts
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      position: 'top'
    },
    scales: {
      xAxes: [
       {
           display: false
       }
     ],
      yAxes: [
         {
          id : 'A',
          position: 'left',
           display: true,
           ticks: {
            beginAtZero: true,            
            callback: label => `${label}%`,
            max : 80,
            steps: 20,
            stepSize : 20
          }
        },
          {
            id : 'B',
            position: 'right',
             display: true,
             ticks: {
              callback: label => `${label}$`,
              max : 80,
              steps: 20,
              stepSize : 20
            }
       }
   ]
   }
  };
  public chartColors:Array<any> = [
    { // teal
      backgroundColor: 'rgba(255,0,0,0.5)',
      borderColor: 'rgba(255,0,0,0.5)',
      HoverBackgroundColor: 'rgba(255,255,255,1)',
      HoverBorderColor: 'rgba(255,255,255,1)'
    },
    { // deep purple
      backgroundColor: 'rgba(198, 218, 251, 0.5)',
      pointBackgroundColor: '#673AB7',
      pointBorderColor: '#673AB7',
      pointHoverBackgroundColor: '#673AB7',
      pointHoverBorderColor: '#673AB7'
    }
  ];

  public barChartLabels:string[] = ['1', '2', '3', '4', '5', '6', '7','8', '9', '10','11', '12', '13', '14', '15', '16', '17','18', '19', '20','21', '22', '23', '24', '25', '26', '27','28', '29', '30'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  private options: any = {
    legend: { position: 'top' }
  }
  public barChartData:any[] = [
    {
      label: "Margin",
      data: [60, 51, 20, 45, 38, 35, 50, 61, 51, 55, 60, 25, 43, 36, 15,24, 45, 37, 15, 56, 20, 60, 46, 49, 13, 21, 31, 34, 16],
      type: "line",
      fill: "false"
    },
    {
      label: "eCPA",
      data: [65, 59, 28, 48, 40, 45, 60, 71, 56, 59, 70, 28, 48, 40, 19,28, 48, 40, 19, 86, 27, 80, 56, 59, 18, 28, 38, 40, 19]
    },

];
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  public myDate:string[] = [
    '08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30',
    'Jun', '02','03','04', '05'
  ];
  public notification:Array<Object> = [
    { date: 'May 08, 2017',count: '2' },{ date: 'May 09, 2017',count: '1' },
    { date: '',count: '' },{ date: '',count: '' },{ date: '',count: '' },
    { date: '',count: '' },{ date: '',count: '' },{ date: '',count: '' },
    { date: '',count: '' },{ date: '',count: '' },{ date: 'May 18, 2017',count: '2' },
    { date: '',count: '' },{ date: '',count: '' },{ date: '',count: '' },
    { date: 'May 22, 2017',count: '1' }, { date: '',count: '' },
    { date: '',count: '' },{ date: 'May 25, 2017',count: '2' },
    { date: '',count: '' },{ date: '',count: '' },{ date: '',count: '' },
    { date: '',count: '' },{ date: '',count: '' },{ date: 'Jun 01, 2017',count: '1' },
    { date: '',count: '' },{ date: 'Jun 03, 2017',count: '2' },{ date: '',count: '' },
    { date: 'Jun 05, 2017',count: '1' },
  ];
  public myData:Array<Object> = [
    {
      radio_id: 1, 
      time:'Jun 05, 10:23 AM', 
      title: 'Strategy Setup System', 
      content:'Gregory Muryn-Mukha added 48 Strategies'
    },
    {
      radio_id: 2, 
      time:'Jun 03, 08:45 PM', 
      title: 'Linking', 
      content:'Opti name linked 4 strategies with 1 budget'
    },{
      radio_id: 3, 
      time:'Jun 03, 05:11 PM', 
      title: 'Viewability Auto Optimization', 
      content:'2 Strategies were created and 5,123 domains were blocked automatically'
    },{
      radio_id: 4, 
      time:'Jun 01, 03:21 PM', 
      title: 'Added Strategy', 
      content:'Gregory Muryn-Mukha added 23 Strategies'
    },{
      radio_id: 5, 
      time:'May 25, 11:15 AM', 
      title: 'Changing targetting on a Strategy', 
      content:'Gregory Muryn-Mukha changed 1 Strategies'
    },{
      radio_id: 6, 
      time:'May 22, 10:23 AM', 
      title: 'Capping', 
      content:'Gregory Muryn-Mukha changed daily impression for 1 budget'
    },
    {
      radio_id: 2, 
      time:'May 18, 08:45 PM', 
      title: 'Linking', 
      content:'Opti name linked 4 strategies with 1 budget'
    },{
      radio_id: 3, 
      time:'May 09, 05:11 PM', 
      title: 'Viewability Auto Optimization', 
      content:'2 Strategies were created and 5,123 domains were blocked automatically'
    },{
      radio_id: 4, 
      time:'May 08, 03:21 PM', 
      title: 'Added Strategy', 
      content:'Gregory Muryn-Mukha added 23 Strategies'
    }
];
}

