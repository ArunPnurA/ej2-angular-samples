import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
    IDataOptions, PivotFieldListComponent, PivotViewComponent,
    EnginePopulatedEventArgs, CalculatedFieldService, FieldListService, IDataSet
} from '@syncfusion/ej2-angular-pivotview';
import { Browser, setStyleAttribute, prepend } from '@syncfusion/ej2-base';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(false);

/**
 * Pivot Field List default sample
 */
/* tslint:disable */
declare var require: any;
let Pivot_Data: IDataSet[] = require('./Pivot_Data.json');
@Component({
    selector: 'ej2-pivotview-container',
    templateUrl: 'defer-update.html',
    styleUrls: ['defer-update.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [CalculatedFieldService, FieldListService]
})
export class DeferUpdateComponent implements OnInit {
    public dataSourceSettings: IDataOptions;
    public gridSettings: GridSettings;

    @ViewChild('pivotview')
    public pivotObj: PivotViewComponent;

    @ViewChild('pivotfieldlist')
    public fieldlistObj: PivotFieldListComponent;

    afterPopulate(arge: EnginePopulatedEventArgs): void {
        if (this.fieldlistObj && this.pivotObj) {
            this.fieldlistObj.updateView(this.pivotObj);
        }
        if (this.fieldlistObj && this.pivotObj && this.fieldlistObj.isRequiredUpdate) {
            this.fieldlistObj.updateView(this.pivotObj);
        }
        this.pivotObj.notify('ui-update', this.pivotObj);
        if (!Browser.isDevice) {
            this.fieldlistObj.notify('tree-view-update', this.fieldlistObj);
        }
    }
    afterEnginePopulate(args: EnginePopulatedEventArgs): void {
        if (!Browser.isDevice && this.fieldlistObj && this.pivotObj) {
            this.fieldlistObj.update(this.pivotObj);
        }
    }
    onLoad(): void {
        if (Browser.isDevice) {
            this.fieldlistObj.renderMode = 'Popup';
            this.fieldlistObj.target = '.control-section';
            setStyleAttribute(document.getElementById('PivotFieldList'), {
                width: 0,
                height: 0,
                float: 'left',
                'display': 'none'
            });
        }
    }

    ondataBound(): void {
        if (Browser.isDevice) {
            this.pivotObj.element.style.width = '100%';
            this.pivotObj.allowCalculatedField = true;
            this.pivotObj.showFieldList = true;
        }        
        this.pivotObj.refresh();
    }

    ngOnInit(): void {
        this.gridSettings = {
            columnWidth: 140
        } as GridSettings;

        this.dataSourceSettings = {
            dataSource: Pivot_Data,
            expandAll: false,
            allowLabelFilter: true,
            allowValueFilter: true,
            drilledMembers: [{ name: 'Country', items: ['France', 'Germany', 'United States'] }],
            filterSettings: [{ name: 'Products', items: ['Gloves', 'Helmets', 'Shorts', 'Vests'], type: 'Include' }],
            columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' },
            { name: 'Amount', caption: 'Sold Amount' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: [{ name: 'Product_Categories', caption: 'Product Categories' }],
            enableSorting: true
        };
    }
}