import { Component, Inject, ViewEncapsulation, ViewChild } from '@angular/core';
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-ng-dropdowns';
import { RecurrenceEditor } from '@syncfusion/ej2-ng-schedule';

@Component({
    templateUrl: 'recurrence-editor-populate.html',
    styleUrls: ['rec-editor.style.css'],
    encapsulation: ViewEncapsulation.None
})
export class RecPopulateComponent {
    @ViewChild('recObject')
    public recObject: RecurrenceEditor;
    public selectedType: number = 1;

    @ViewChild('listObj')
    public listObj: DropDownListComponent;

    public datas: { [key: string]: Object }[] = [
        { rule: 'FREQ=DAILY;INTERVAL=1' },
        { rule: 'FREQ=DAILY;INTERVAL=2;UNTIL=20410606T000000Z' },
        { rule: 'FREQ=DAILY;INTERVAL=2;COUNT=8' },
        { rule: 'FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR;INTERVAL=1;UNTIL=20410729T000000Z' },
        { rule: 'FREQ=MONTHLY;BYDAY=FR;BYSETPOS=2;INTERVAL=1;UNTIL=20410729T000000Z' },
        { rule: 'FREQ=MONTHLY;BYDAY=FR;BYSETPOS=2;INTERVAL=1' },
        { rule: 'FREQ=YEARLY;BYDAY=MO;BYSETPOS=-1;INTERVAL=1;COUNT=5' }];
    public fields: Object = { text: 'rule', value: 'rule' };
    public index: number = 0;

    onChange(e: ChangeEventArgs): void {
        this.recObject.setRecurrenceRule(e.value as string);
    }
    constructor(@Inject('sourceFiles') private sourceFiles: any) {
        sourceFiles.files = ['rec-editor.style.css'];
    }
}
