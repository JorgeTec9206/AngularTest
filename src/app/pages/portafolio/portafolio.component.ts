import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexYAxis,
  ApexFill,
  ApexTooltip,
  ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  yaxis: ApexYAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit {

  
  /* segundo chart */
  series: ApexAxisChartSeries = [
    {
      name: "Anual",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    },
    {
      name: "Mensual",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    },
    {
      name: "Semanal",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }
  ];
  chart: ApexChart ={
    height: 350,
    type: "bar",
    zoom: {
      enabled: false
    }
  };
  plotOptions: ApexPlotOptions = {
    bar: {
      horizontal: false,
      columnWidth: "55%",
    }
  };
  dataLabels: ApexDataLabels ={
    enabled: false
  };
  stroke: ApexStroke = {
    show: true,
    width: 2,
    colors: ["transparent"]
  };
  xaxis: ApexXAxis = {
    categories: [
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct"
    ]
  };
  yaxis: ApexYAxis = {
    title: {
      text: "$ (thousands)"
    }
  };
  fill: ApexFill = {
    opacity: 1
  };
 
  tooltip: ApexTooltip = {
    y: {
      formatter: function(val:any) {
        return "$ " + val + " thousands";
      }
    }
  };
 
  constructor() { }

  ngOnInit(): void {
  }

}
