import { Component, ViewEncapsulation, Inject, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
import { SheetModel, ColumnModel, RowModel, CellRenderEventArgs, } from '@syncfusion/ej2-angular-spreadsheet';
import { orderDetails } from './data';
/**
 * Cell Formatting Spreadsheet Controller
 */
@Component({
    selector: 'control-content',
    templateUrl: 'cell-formatting.html',
    styleUrls: ['spreadsheet.css'],
    encapsulation: ViewEncapsulation.None
})

export class CellFormatController {
    constructor(@Inject('sourceFiles') private sourceFiles: any) {
        sourceFiles.files = ['spreadsheet.css'];
    }
    @ViewChild('cellFormat')
    public spreadsheetObj: SpreadsheetComponent;
    public data: Object[] = orderDetails();
    public columns: ColumnModel[] = [{ width: 80 }, { width: 140 }, { width: 100 }, { width: 232 }, { width: 120 }, { width: 100 },
    { width: 100 }, { width: 120 }, { width: 80 }];
    public rows: RowModel[] = [
        {
            height: 36,
            // Applying cell formatting through cell binding
            cells: [{ style: { textAlign: 'right' } }, { style: { textIndent: '2pt' } }, { style: { textAlign: 'right' } },
            { style: { textIndent: '2pt' } }, { index: 5, style: { textAlign: 'right' } },
            { index: 7, style: { textAlign: 'center' } }, { index: 8, style: { textAlign: 'right' } }]
        }, { height: 42 }, { height: 42 }, { height: 42 }, { height: 42 }, { height: 42 },
        { height: 42 }, { height: 42 }, { height: 42 }, { height: 42 }, { height: 42 }, { height: 42 }, { height: 42 }, { height: 42 },
        { height: 42 }, { height: 42 }];

    public sheets: SheetModel[] = [{
        name: 'Order Details',
        rangeSettings: [{ dataSource: this.data }],
        columns: this.columns,
        rows: this.rows,
        showGridLines: false
    }];
    beforeDataBound() {
        if (!this.spreadsheetObj.isOpen && this.spreadsheetObj.sheets[this.spreadsheetObj.activeSheetTab - 1].name === 'Order Details') {
            // Applying cell formatting dynamically using cellFormat method
            this.spreadsheetObj.cellFormat({ fontWeight: 'bold', backgroundColor: '#4b5366', color: '#ffffff', fontSize: '12pt' }, 'A1:I1');
            this.spreadsheetObj.cellFormat({ fontWeight: 'bold', textIndent: '2pt' }, 'B2:B16');
            this.spreadsheetObj.cellFormat({ fontStyle: 'italic', textIndent: '2pt' }, 'D2:D16');
            this.spreadsheetObj.cellFormat({ textIndent: '2pt' }, 'E1:E16');
            this.spreadsheetObj.cellFormat({ textIndent: '2pt' }, 'G1:G16');
            this.spreadsheetObj.cellFormat({ textAlign: 'center', fontWeight: 'bold' }, 'H2:H16');
            this.spreadsheetObj.cellFormat({ fontFamily: 'Helvetica New', verticalAlign: 'middle' }, 'A1:I16');
        }
    }
    beforeCellRender(args: CellRenderEventArgs) {
        if (!this.spreadsheetObj.isOpen && this.spreadsheetObj.sheets[this.spreadsheetObj.activeSheetTab - 1].name === 'Order Details') {
            if (args.cell && args.cell.value) {
                // Applying cell formatting before rendering the particular cell
                switch (args.cell.value) {
                    case 'Delivered':
                        this.spreadsheetObj.cellFormat({ color: '#10c469', textDecoration: 'line-through' }, args.address);
                        break;
                    case 'Shipped':
                        this.spreadsheetObj.cellFormat({ color: '#62c9e8' }, args.address);
                        break;
                    case 'Pending':
                        this.spreadsheetObj.cellFormat({ color: '#FFC107', textDecoration: 'underline' }, args.address);
                        break;
                    case 'Cancelled':
                        this.spreadsheetObj.cellFormat({ color: '#ff5b5b' }, args.address);
                        break;
                }
            }
        }
    }
}