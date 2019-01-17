import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {Globals} from 'src/app/services/globals'
import { AnswerService } from '../services/answer.service';

@Component({
  selector: 'app-profil-page',
  templateUrl: './profil-page.component.html',
  styleUrls: ['./profil-page.component.scss']
})
export class ProfilPageComponent implements OnInit {
  answers:any;
  no1 = 0;
  no2 = 0;
  no3 = 0;
  no4 = 0;
  no5 = 0;
  forms: any;
  constructor(private globals:Globals) { }

  ngOnInit() {
    this.answers = this.globals.answerData;
    for( var i = 0; i < this.answers.length; i++)
      if(this.answers[i] == "1")
        this.no1 ++;
        else if(this.answers[i] == "2")
                this.no2 ++;
                else if (this.answers[i] == "3")
                        this.no3 ++;
                        else if(this.answers[i] == "4")
                                this.no4++;
                                else this.no5++;
    am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
let chart = am4core.create("chartdiv", am4charts.PieChart);
let chart1 = am4core.create("chartdiv1", am4charts.PieChart);
chart1.data = [ {
  "Review": "1",
  "number": this.no1
}, {
  "Review": "2",
  "number": this.no2
}, {
  "Review": "3",
  "number": this.no3
}, {
  "Review": "4",
  "number": this.no4
}, {
  "Review": "5",
  "number": this.no5
} ];

// Add data
chart.data = [ {
  "Review": "1",
  "number": this.no1
}, {
  "Review": "2",
  "number": this.no2
}, {
  "Review": "3",
  "number": this.no3
}, {
  "Review": "4",
  "number": this.no4
}, {
  "Review": "5",
  "number": this.no5
} ];

chart1.innerRadius = am4core.percent(50);
// Add and configure Series
let pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "number";
pieSeries.dataFields.category = "Review";
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.slices.template.strokeWidth = 2;
pieSeries.slices.template.strokeOpacity = 1;

// This creates initial animation
pieSeries.hiddenState.properties.opacity = 1;
pieSeries.hiddenState.properties.endAngle = -90;
pieSeries.hiddenState.properties.startAngle = -90;

let pieSeries1 = chart1.series.push(new am4charts.PieSeries());
pieSeries1.dataFields.value = "number";
pieSeries1.dataFields.category = "Review";
pieSeries1.slices.template.stroke = am4core.color("#fff");
pieSeries1.slices.template.strokeWidth = 2;
pieSeries1.slices.template.strokeOpacity = 1;

// This creates initial animation
pieSeries1.hiddenState.properties.opacity = 1;
pieSeries1.hiddenState.properties.endAngle = -90;
pieSeries1.hiddenState.properties.startAngle = -90;

let chart2 = am4core.create("chartdiv2", am4charts.XYChart3D);

// Add data
chart2.data =  [ {
  "Review": "1",
  "number": this.no1
}, {
  "Review": "2",
  "number": this.no2
}, {
  "Review": "3",
  "number": this.no3
}, {
  "Review": "4",
  "number": this.no4
}, {
  "Review": "5",
  "number": this.no5
} ];

// Create axes
let categoryAxis = chart2.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Review";
categoryAxis.renderer.labels.template.rotation = 270;
categoryAxis.renderer.labels.template.hideOversized = false;
categoryAxis.renderer.minGridDistance = 20;
categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.tooltip.label.rotation = 270;
categoryAxis.tooltip.label.horizontalCenter = "right";
categoryAxis.tooltip.label.verticalCenter = "middle";

let valueAxis = chart2.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "Review";
valueAxis.title.fontWeight = "bold";

// Create series
let series = chart2.series.push(new am4charts.ColumnSeries3D());
series.dataFields.valueY = "number";
series.dataFields.categoryX = "Review";
series.name = "number";
series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
series.columns.template.fillOpacity = .8;

let columnTemplate = series.columns.template;
columnTemplate.strokeWidth = 2;
columnTemplate.strokeOpacity = 1;
columnTemplate.stroke = am4core.color("#FFFFFF");

columnTemplate.adapter.add("fill", (fill, target) => {
  return chart.colors.getIndex(target.dataItem.index);
})

columnTemplate.adapter.add("stroke", (stroke, target) => {
  return chart.colors.getIndex(target.dataItem.index);
})

chart2.cursor = new am4charts.XYCursor();
chart2.cursor.lineX.strokeOpacity = 0;
chart2.cursor.lineY.strokeOpacity = 0;
  }

}
