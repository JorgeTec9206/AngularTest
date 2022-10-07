import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexDataLabels
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  chartSeries: ApexAxisChartSeries = [
    {
      name: "High - 2013",
      data: [28, 29, 33, 36, 32, 32, 33]
    },
    {
      name: "Low - 2013",
      data: [12, 11, 14, 18, 17, 13, 13]
    }
  ]

  chartDetails: ApexChart = {
    type: 'line',
    height: 250,
    dropShadow: {
      enabled: true,
      color: "#000",
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar:{
      show: true
    }
  };
  yaxis: ApexXAxis = {
    title: {
      text: "Temperature"
    },
    min: 5,
    max: 40
  };

  chartSeriesTwo: ApexAxisChartSeries = [
    {
      name: "basic",
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }
  ];
  plotOptions: ApexPlotOptions ={
    bar: {
      horizontal: true
    }
  };
  dataLabels: ApexDataLabels = {
    enabled: false
  };

  chartDetailsTwo : ApexChart = {
    type: 'bar',
    height: 250,
    dropShadow: {
      enabled: true,
      color: "#000",
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar:{
      show: true
    }
  };
  xaxis: ApexXAxis = {
    categories: [
      "South Korea",
      "Canada",
      "United Kingdom",
      "Netherlands",
      "Italy",
      "France",
      "Japan",
      "United States",
      "China",
      "Germany"
    ]
  }
  
 

  constructor() {
    
  }
  ngOnInit(): void {

    
    
    
  }

  

}

