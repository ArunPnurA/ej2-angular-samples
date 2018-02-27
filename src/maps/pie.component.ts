import { Component, ViewEncapsulation } from '@angular/core';
import { MapsTheme, Maps, Marker, ILoadEventArgs, Legend } from '@syncfusion/ej2-ng-maps';
import { AccumulationChart, PieSeries, DataLabel, AccumulationTooltip } from '@syncfusion/ej2-charts';
import { world_continent } from './MapData/Continent';

AccumulationChart.Inject(AccumulationChart, PieSeries, DataLabel, AccumulationTooltip);
Maps.Inject(Marker, Legend);

/**
 * Dynamic pie demo
 */
@Component({
    selector: 'control-content',
    templateUrl: 'pie.html',
    styleUrls: ['maps.style.css'],
    encapsulation: ViewEncapsulation.None
})
export class MapsPieComponent {
    public zoomSettings: object = {
        enable: false
    };
    public load = (args: ILoadEventArgs) => {
        let theme: string = location.hash.split('/')[1];
        theme = theme ? theme : 'Material';
        args.maps.theme = <MapsTheme>(theme.charAt(0).toUpperCase() + theme.slice(1));
    }
    public titleSettings: object = {
        text: 'Top 6 largest countries age group details',
        titleStyle: { size: '16px' }
    };
    public legendSettings: object = {
        visible: true,
        position: 'Bottom'
    };

    public layers: object[] = [
        {
            shapeData: world_continent,
            shapeSettings: {
                fill: '#E5E5E5',
                colorMapping: [
                    {
                        from: 0, to: 4, color: '#634D6F', label: '0-14 years',
                    },
                    {
                        from: 5, to: 14, color: '#B34D6D', label: '15-24 years'
                    },
                    {
                        from: 15, to: 59, color: '#557C5C', label: '25-54 years'
                    },
                    {
                        from: 60, to: 100, color: '#5E55E2', label: '55-64 years'
                    }
                ]
            },
            markerSettings: [
                {
                    visible: true,
                    template: '<div id="template" style="display:none;">Name</div>',
                    dataSource: [
                        { 'latitude': 61.938950426660604, 'longitude': 97.03125 },
                        { 'latitude': 57.70414723434193, 'longitude': -114.08203125 },
                        { 'latitude': 39.90973623453719, 'longitude': -103.0078125 },
                        { 'latitude': 35.746512259918504, 'longitude': 102.216796875 },
                        { 'latitude': -8.667918002363107, 'longitude': -52.55859375 },
                        { 'latitude': -23.725011735951796, 'longitude': 132.978515625 }
                    ],
                    animationDuration: 0
                }
            ]
        }
    ];
    ngAfterViewInit() {
        setTimeout(() => {
            let chart: AccumulationChart = new AccumulationChart({
                background: 'transparent', width: '70', height: '70',
                tooltip: { enable: true, format: '${point.x} : ${point.y}' },
                series: [{
                    name: 'Russia', explode: true, explodeIndex: 0, explodeOffset: '30%',
                    palettes: ['#634D6F', '#B34D6D', '#557C5C', '#5E55E2'],
                    dataSource: [
                        { 'x': '0-14 years', y: 16 }, { 'x': '15-24 years', y: 11.5 },
                        { 'x': '25-54 years', y: 45.9 }, { 'x': '55-64 years', y: 13.5 },
                    ],
                    dataLabel: { visible: true }, type: 'Pie', xName: 'x', yName: 'y'
                }]
            });
            chart.appendTo('#container_LayerIndex_0_MarkerIndex_0_DataIndex_0');

            let chart1: AccumulationChart = new AccumulationChart({
                background: 'transparent', width: '70', height: '70',
                tooltip: { enable: true, format: '${point.x} : ${point.y}' },
                series: [{
                    name: 'Canada', explode: true, explodeIndex: 0, explodeOffset: '30%',
                    palettes: ['#634D6F', '#B34D6D', '#557C5C', '#5E55E2'],
                    dataSource: [
                        { 'x': '0-14 years', y: 15.5 }, { 'x': '15-24 years', y: 12.9 },
                        { 'x': '25-54 years', y: 41.4 }, { 'x': '55-64 years', y: 13.3 },
                    ],
                    dataLabel: { visible: true }, type: 'Pie', xName: 'x', yName: 'y'
                }]
            });
            chart1.appendTo('#container_LayerIndex_0_MarkerIndex_0_DataIndex_1');

            let chart2: AccumulationChart = new AccumulationChart({
                background: 'transparent', width: '70', height: '70',
                tooltip: { enable: true, format: '${point.x} : ${point.y}' },
                series: [{
                    name: 'USA', explode: true, explodeIndex: 0, explodeOffset: '30%',
                    palettes: ['#634D6F', '#B34D6D', '#557C5C', '#5E55E2'],
                    dataSource: [
                        { 'x': '0-14 years', y: 20 }, { 'x': '15-24 years', y: 13.7 },
                        { 'x': '25-54 years', y: 40.2 }, { 'x': '55-64 years', y: 12.3 },
                    ],
                    dataLabel: { visible: true }, type: 'Pie', xName: 'x', yName: 'y'
                }]
            });
            chart2.appendTo('#container_LayerIndex_0_MarkerIndex_0_DataIndex_2');

            let chart3: AccumulationChart = new AccumulationChart({
                background: 'transparent', width: '70', height: '70',
                tooltip: { enable: true, format: '${point.x} : ${point.y}' },
                series: [{
                    name: 'China', explode: true, explodeIndex: 0, explodeOffset: '30%',
                    palettes: ['#634D6F', '#B34D6D', '#557C5C', '#5E55E2'],
                    dataSource: [
                        { 'x': '0-14 years', y: 17.2 }, { 'x': '15-24 years', y: 15.4 },
                        { 'x': '25-54 years', y: 46.9 }, { 'x': '55-64 years', y: 11.3 },
                    ],
                    dataLabel: { visible: true }, type: 'Pie', xName: 'x', yName: 'y'
                }]
            });
            chart3.appendTo('#container_LayerIndex_0_MarkerIndex_0_DataIndex_3');

            let chart4: AccumulationChart = new AccumulationChart({
                background: 'transparent', width: '70', height: '70',
                tooltip: { enable: true, format: '${point.x} : ${point.y}' },
                series: [{
                    name: 'Brazil', explode: true, explodeIndex: 0, explodeOffset: '30%',
                    palettes: ['#634D6F', '#B34D6D', '#557C5C', '#5E55E2'],
                    dataSource: [
                        { 'x': '0-14 years', y: 24.2 }, { 'x': '15-24 years', y: 16.7 },
                        { 'x': '25-54 years', y: 43.6 }, { 'x': '55-64 years', y: 8.2 },
                    ],
                    dataLabel: { visible: true }, type: 'Pie', xName: 'x', yName: 'y'
                }]
            });
            chart4.appendTo('#container_LayerIndex_0_MarkerIndex_0_DataIndex_4');

            let chart5: AccumulationChart = new AccumulationChart({
                background: 'transparent', width: '70', height: '70',
                tooltip: { enable: true, format: '${point.x} : ${point.y}' },
                series: [{
                    name: 'Australia', explode: true, explodeIndex: 0, explodeOffset: '30%',
                    palettes: ['#634D6F', '#B34D6D', '#557C5C', '#5E55E2'],
                    dataSource: [
                        { 'x': '0-14 years', y: 18.1 }, { 'x': '15-24 years', y: 13.4 },
                        { 'x': '25-54 years', y: 42 }, { 'x': '55-64 years', y: 11.8 },
                    ],
                    dataLabel: { visible: true }, type: 'Pie', xName: 'x', yName: 'y'
                }]
            });
            chart5.appendTo('#container_LayerIndex_0_MarkerIndex_0_DataIndex_5');
        }, 200);
    }

    constructor() {
        //code
    };
}