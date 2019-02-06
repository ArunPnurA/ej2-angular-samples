// tslint:disable
import { Component, Inject, ViewEncapsulation, ViewChild } from '@angular/core';
import { TreeMap, TreeMapTooltip, TreeMapLegend, LegendMode, LegendPosition } from '@syncfusion/ej2-angular-treemap';
import { electionData } from './election-data';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { ILoadEventArgs, TreeMapTheme } from '@syncfusion/ej2-angular-treemap';
TreeMap.Inject(TreeMapTooltip, TreeMapLegend);

/**
 * Default sample
 */
@Component({
    selector: 'control-content',
    templateUrl: 'legend.html',
    encapsulation: ViewEncapsulation.None
})
export class TreemapLegendComponent {
    @ViewChild('treemap')
    public treemap: TreeMap;
    public load = (args: ILoadEventArgs) => {
        let theme: string = location.hash.split('/')[1];
        theme = theme ? theme : 'Material';
        args.treemap.theme = <TreeMapTheme>(theme.charAt(0).toUpperCase() + theme.slice(1));
    }
        titleSettings: object = {
            text: 'US Presidential election result - 2016',
            textStyle: { size: '15px' }
        };
        dataSource: object[] = electionData;
        weightValuePath: string = 'Population';
        tooltipSettings: object = {
            visible: true,
            format: ' <b>${Winner}<b><br>State : ${State}<br>Trump : ${Trump} %<br>Clinton : ${Clinton} %'
        };
        legendSettings: object = {
            visible: true,
            position: 'Top',
            shape: 'Rectangle',
            height: '10'
        };
        equalColorValuePath: string = 'Winner';
        leafItemSettings: object = {
            labelPath: 'State',
            fill: '#6699cc',
            border: { color: 'white', width: 0.5 },
            colorMapping: [
                {
                    value: 'Trump', color: '#D84444'
                },
                {
                    value: 'Clinton', color: '#316DB5'
                }
            ]
        };
        ngAfterViewInit(): void {
            let legend: DropDownList = new DropDownList({
                index: 0, placeholder: 'Select layout type', width: 120,
                change: () => {
                    this.treemap.legendSettings.mode = <LegendMode>legend.value;
                    if (legend.value === 'Interactive') {
                        if (this.treemap.legendSettings.orientation === 'Horizontal' || this.treemap.legendSettings.orientation === 'None') {
                            this.treemap.legendSettings.height = '10';
                            this.treemap.legendSettings.width = '';
                        } else {
                            this.treemap.legendSettings.height = '70%';
                            this.treemap.legendSettings.width = '10';
                        }
                    } else {
                        this.treemap.legendSettings.height = '';
                        this.treemap.legendSettings.width = '';
                    }
                    this.treemap.refresh();
                }
            });
            legend.appendTo('#legendMode');
            let position: DropDownList = new DropDownList({
                index: 0, placeholder: 'Select layout type', width: 120,
                change: () => {
                    this.treemap.legendSettings.position = <LegendPosition>position.value;
                    if (position.value === 'Left' || position.value === 'Right') {
                        this.treemap.legendSettings.orientation = 'Vertical';
                        if (this.treemap.legendSettings.mode === 'Interactive') {
                            this.treemap.legendSettings.height = '70%';
                            this.treemap.legendSettings.width = '10';
                        } else {
                            this.treemap.legendSettings.height = '';
                            this.treemap.legendSettings.width = '';
                        }
                    } else {
                        this.treemap.legendSettings.orientation = 'Horizontal';
                        if (this.treemap.legendSettings.mode === 'Interactive') {
                            this.treemap.legendSettings.height = '10';
                            this.treemap.legendSettings.width = '';
                        }
                    }
                    this.treemap.refresh();
                }
            });
            position.appendTo('#legendPosition');
        }
        constructor(@Inject('sourceFiles') private sourceFiles: any) {
            sourceFiles.files = ['election-data.ts' ];
        };
};