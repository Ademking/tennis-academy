import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  chartOption1: EChartsOption = {
    legend: {
      top: 'bottom'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [50, 100],
        center: ['50%', '40%'],

        itemStyle: {
          borderRadius: 8
        },
        data: [
          { value: 250, name: 'Players' },
          { value: 50, name: 'Coaches' },
          { value: 10, name: 'Admins' },

        ]
      }
    ]
  }


  chartOption2: EChartsOption = {

    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Court 1', 'Court 2', 'Court 3', 'Court 4', 'Court 5']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Court 1',
        type: 'line',
        stack: 'Total',
        data: [100, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Court 2',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Court 3',
        type: 'line',
        stack: 'Total',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Court 4',
        type: 'line',
        stack: 'Total',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Court 5',
        type: 'line',
        stack: 'Total',
        data: [200, 150, 300, 145, 245, 254, 562]
      }
    ]
  };




}
