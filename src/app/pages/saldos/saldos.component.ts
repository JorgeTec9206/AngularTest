import { Component, OnInit } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend,
  ApexPlotOptions,
  ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  tooltip: any; // ApexTooltip;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  
};


@Component({
  selector: 'app-saldos',
  templateUrl: './saldos.component.html',
  styleUrls: ['./saldos.component.scss']
})
export class SaldosComponent implements OnInit {

  series: ApexAxisChartSeries = [
    {
      name: "Session Duration",
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
    },
    {
      name: "Page Views",
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
    },
    {
      name: "Total Visits",
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
    }
  ];
  chart: ApexChart = {
    height: 350,
    type: "line"
  };
  dataLabels: ApexDataLabels = {
    enabled: false
  };
  stroke: ApexStroke = {
    width: 5,
    curve: "straight",
    dashArray: [0, 8, 5]
  };
  title: ApexTitleSubtitle =  {
    text: "Page Statistics",
    align: "left"
  };
  legend: ApexLegend = {
    tooltipHoverFormatter: function(val, opts) {
      return (
        val +
        " - <strong>" +
        opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
        "</strong>"
      );
    }
  };
  markers: ApexMarkers = {
    size: 0,
    hover: {
      sizeOffset: 6
    }
  };
  xaxis: ApexXAxis = {
    labels: {
      trim: false
    },
    categories: [
      "01 Jan",
      "02 Jan",
      "03 Jan",
      "04 Jan",
      "05 Jan",
      "06 Jan",
      "07 Jan",
      "08 Jan",
      "09 Jan",
      "10 Jan",
      "11 Jan",
      "12 Jan"
    ]
  };
  tooltip: any = {
    y: [
      {
        title: {
          formatter: function(val:any) {
            return val + " (mins)";
          }
        }
      },
      {
        title: {
          formatter: function(val:any) {
            return val + " per session";
          }
        }
      },
      {
        title: {
          formatter: function(val:any) {
            return val;
          }
        }
      }
    ]
  };
  grid: ApexGrid = {
    borderColor: "#f1f1f1"
  };

  /* grafica dos */
  seriesm: ApexAxisChartSeries = [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }
  ];
  chartm: ApexChart = {
    type: "bar",
    height: 380
  };
  plotOptionsm: ApexPlotOptions = {
    bar: {
      barHeight: "100%",
      distributed: true,
      horizontal: true,
      dataLabels: {
        position: "bottom"
      }
    }
  };
  colorsm: string[] = [
    "#33b2df",
    "#546E7A",
    "#d4526e",
    "#13d8aa",
    "#A5978B",
    "#2b908f",
    "#f9a3a4",
    "#90ee7e",
    "#f48024",
    "#69d2e7"
  ];
  dataLabelsm: ApexDataLabels = {
    enabled: false,
    textAnchor: "start",
    style: {
      colors: ["#fff"]
    },
    formatter: function(val, opt ) {
      return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
    },
    offsetX: 0,
    dropShadow: {
      enabled: true
    }
  };
  strokem: ApexStroke = {
    width: 1,
    colors: ["#fff"]
  };
  xaxism: ApexXAxis = {
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
      "India"
    ]
  };
  yaxism: ApexYAxis = {
    labels: {
      show: false
    }
  };
  titlem: ApexTitleSubtitle ={
    text: "Custom DataLabels",
    align: "center",
    floating: true
  };
  subtitlem: ApexTitleSubtitle = {
    text: "Category Names as DataLabels inside bars",
    align: "center"
  };
  tooltipm: ApexTooltip = {
    theme: "dark",
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function() {
          return "";
        }
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
