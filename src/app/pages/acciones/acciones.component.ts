import { Component, ElementRef, OnInit } from '@angular/core';
import { AccionesService } from '../../services/acciones.service';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexFill,
  ApexPlotOptions,
  ApexLegend,
  ApexMarkers,
  ApexYAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  fill: ApexFill;
  markers: ApexMarkers;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-acciones',
  templateUrl: './acciones.component.html',
  styleUrls: ['./acciones.component.scss']
})
export class AccionesComponent implements OnInit {

  series: ApexAxisChartSeries = [
    {
      name: "Likes",
      data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
    }
  ];
  chart: ApexChart = {
    height: 350,
    type: "line"
  };
  stroke: ApexStroke = {
    width: 7,
    curve: "smooth"
  };
  xaxis: ApexXAxis = {
    type: "datetime",
    categories: [
      "1/11/2000",
      "2/11/2000",
      "3/11/2000",
      "4/11/2000",
      "5/11/2000",
      "6/11/2000",
      "7/11/2000",
      "8/11/2000",
      "9/11/2000",
      "10/11/2000",
      "11/11/2000",
      "12/11/2000",
      "1/11/2001",
      "2/11/2001",
      "3/11/2001",
      "4/11/2001",
      "5/11/2001",
      "6/11/2001"
    ]
  };
  title: ApexTitleSubtitle = {
    text: "Social Media",
    align: "left",
    style: {
      fontSize: "16px",
      color: "#666"
    }
  };
  fill: ApexFill = {
    type: "gradient",
    gradient: {
      shade: "dark",
      gradientToColors: ["#FDD835"],
      shadeIntensity: 1,
      type: "horizontal",
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100, 100, 100]
    }
  };
  markers: ApexMarkers = {
    size: 4,
    colors: ["#FFA41B"],
    strokeColors: "#fff",
    strokeWidth: 2,
    hover: {
      size: 7
    }
  };
  yaxis: ApexYAxis = {
    min: -10,
    max: 40,
    title: {
      text: "Engagement"
    }
  };

  /* grafica dos */

  seriesm: ApexAxisChartSeries = [
    {
      name: "Actual",
      data: [
        {
          x: "2011",
          y: 1292,
          goals: [
            {
              name: "Expected",
              value: 1400,
              strokeWidth: 5,
              strokeColor: "#775DD0"
            }
          ]
        },
        {
          x: "2012",
          y: 4432,
          goals: [
            {
              name: "Expected",
              value: 5400,
              strokeWidth: 5,
              strokeColor: "#775DD0"
            }
          ]
        },
        {
          x: "2013",
          y: 5423,
          goals: [
            {
              name: "Expected",
              value: 5200,
              strokeWidth: 5,
              strokeColor: "#775DD0"
            }
          ]
        },
        {
          x: "2014",
          y: 6653,
          goals: [
            {
              name: "Expected",
              value: 6500,
              strokeWidth: 5,
              strokeColor: "#775DD0"
            }
          ]
        },
        {
          x: "2015",
          y: 8133,
          goals: [
            {
              name: "Expected",
              value: 6600,
              strokeWidth: 5,
              strokeColor: "#775DD0"
            }
          ]
        },
        {
          x: "2016",
          y: 7132,
          goals: [
            {
              name: "Expected",
              value: 7500,
              strokeWidth: 5,
              strokeColor: "#775DD0"
            }
          ]
        },
        {
          x: "2017",
          y: 7332,
          goals: [
            {
              name: "Expected",
              value: 8700,
              strokeWidth: 5,
              strokeColor: "#775DD0"
            }
          ]
        },
        {
          x: "2018",
          y: 6553,
          goals: [
            {
              name: "Expected",
              value: 7300,
              strokeWidth: 5,
              strokeColor: "#775DD0"
            }
          ]
        }
      ]
    }
  ];
  chartm: ApexChart = {
    height: 350,
    type: "bar"
  };
  plotOptionsm: ApexPlotOptions ={
    bar: {
      horizontal: true
    }
  };
  colorsm: string[] = ["#00E396"];
  dataLabelsm: ApexDataLabels = {
    formatter: function (val:any, opts ) {
      const goals =
        opts.w.config.series[opts.seriesIndex].data[opts.dataPointIndex]
          .goals;

      if (goals && goals.length) {
        return `${val} / ${goals[0].value}`;
      }
      return val;
    }
  };
  legendm: ApexLegend = {
    show: true,
    showForSingleSeries: true,
    customLegendItems: ["Actual", "Expected"],
    markers: {
      fillColors: ["#00E396", "#775DD0"]
    }
  };



  constructor(private acciones:AccionesService, private el:ElementRef) { }

  ngOnInit(): void {

    this.el.nativeElement.querySelector('.mat-grid-tile-content').style = 'align-items:flex-start';
  }

}
