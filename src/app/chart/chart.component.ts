import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { ChartService } from '../chart.service';
import { ChartData } from '../shared/chart/models/chart.model';
import 'chartjs-adapter-date-fns';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  public chart: any;
  public dailyData: ChartData[]=[];
  public threeMonths: ChartData[]=[];
  public oneYear: ChartData[]=[];
  public threeYears: ChartData[]=[];
  public fiveYears: ChartData[]=[];
  public buttonList: string[]=["","active","","",""];

  constructor(private chartService: ChartService) {}

  ngOnInit(): void {
    this.chartService.getDailyData()
    .subscribe((response: ChartData[]) => {
      this.dailyData = response;
      console.log(this.dailyData);      
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
    ); 
    this.chartService.getThreeMonths().subscribe((response: ChartData[]) => {
      this.threeMonths = response; 
      console.log(this.threeMonths);
      this.createChart(this.threeMonths);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
    ); 
    this.chartService.getOneYear().subscribe((response: ChartData[]) => {
      this.oneYear = response;
      console.log(this.oneYear);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
    );
    this.chartService.getThreeYears().subscribe((response: ChartData[]) => {
      this.threeYears = response;
      console.log(this.threeYears);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
    );
    this.chartService.getFiveYears().subscribe((response: ChartData[]) => {
      this.fiveYears = response;
      console.log(this.fiveYears);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
    );
  }

  changeButtonClass(n : number){//change a button's color when it's clicked
    for (var i=0;i<5;i++){
      this.buttonList[i]="";
    }
    this.buttonList[n]="active"
  }

  getTimeData(chartData: ChartData[]){
    var timeData: string[];
    timeData=[];
    chartData.forEach(function(item){  
    timeData.push(item.timeData)  
    });  
    return timeData;
  }
  
  getPriceData(chartData: ChartData[]){
    var priceData: number[];
    priceData=[];
    chartData.forEach(function(item){  
      priceData.push(item.priceData)  
    });  
    return priceData;
  }

  createNewChart(chartData: ChartData[],unitType: string) { //create a new chart when a button is clicked
    this.chart.destroy();
    this.createChart(chartData);
    this.chart.options.scales.xAxes.time.unit=unitType;// change the unit type
    this.chart.update();
    console.log( this.chart.options.scales.xAxes.time.unit);
  }
  
  createChart(chartData: ChartData[]) {
    this.chart = new Chart("MyChart", {
      type: 'line', 
      data: {
        labels: this.getTimeData(chartData), 
	       datasets: [
          {
            label: "",
            data: this.getPriceData(chartData),
            borderColor: '#454545',
            borderWidth: 1.5,
            pointRadius: 0,
            fill: true,
            backgroundColor: '#F0F0F0'
          },
        ]
      },
      options: {
        aspectRatio:2.5,
        scales: {
          xAxes: {
            type: 'time',
            time: {
              unit: 'month'
            },
            ticks: {
                color: "black",
                maxRotation: 0,
                minRotation:0,
                maxTicksLimit:8
            }
          },
          yAxes: {
            ticks: {
              color: "black"
          }
          },
      },
      plugins: {
        legend: {
           display: false
        }
     },
      animation:false 
      }        
    });   
  }
}
