/**
 * RTE Toolbar Types Sample
 */
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { addClass, removeClass, Browser } from '@syncfusion/ej2-base';
import { ToolbarService, ToolbarType, LinkService, ImageService } from '@syncfusion/ej2-angular-richtexteditor';
import { DropDownListComponent, FieldSettingsModel } from '@syncfusion/ej2-angular-dropdowns';
import { CheckBoxComponent } from '@syncfusion/ej2-angular-buttons';
import { RichTextEditorComponent, HtmlEditorService, QuickToolbarService } from '@syncfusion/ej2-angular-richtexteditor';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'control-content',
    templateUrl: 'types.html',
    styleUrls: ['types.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService]
})
export class ToolbarTypeComponent {
    @ViewChild('type') ddlObj: DropDownListComponent;
    @ViewChild('float') rteFloatObj: CheckBoxComponent;
    @ViewChild('typeRTE') rteObj: RichTextEditorComponent;
    public tools: ToolbarModule = {
        items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
            'Outdent', 'Indent', '|',
            'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
            'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
    };
    // Mapping DropDownList dataSource property
    public dataSource: { [key: string]: Object }[] = [{ text: 'Expand', value: 1 }, { text: 'MultiRow', value: 2 }];
    public fltType: string = 'Auto';
    public placeholder: string = 'Types';
    // Mapping DropDownList fields property
    public typeFields: FieldSettingsModel = { text: 'text', value: 'value' };
    public typeValue: number = 1;
    // Change event funtion for DropDownList component
    public typeChange(): void {
        switch (this.ddlObj.value as number) {
            case 1:
                this.rteObj.toolbarSettings.type = ToolbarType.Expand;
                this.rteObj.toolbarSettings.enableFloating = this.rteFloatObj.checked;
                break;
            case 2:
                this.rteObj.toolbarSettings.type = ToolbarType.MultiRow;
                this.rteObj.toolbarSettings.enableFloating = this.rteFloatObj.checked;
                break;
        }
    }
    public onChangeFloat(): void {
        this.rteObj.toolbarSettings.enableFloating = this.rteFloatObj.checked;
    }
    public handleFullScreen(e: any): void {
        const sbCntEle: HTMLElement = document.querySelector('.sb-content.e-view');
        const sbHdrEle: HTMLElement = document.querySelector('.sb-header.e-view');
        const leftBar: HTMLElement = document.querySelector('#left-sidebar');
        if (e.targetItem === 'Maximize') {
            if (Browser.isDevice && Browser.isIos) {
                addClass([sbCntEle, sbHdrEle], ['hide-header']);
            }
            addClass([leftBar], ['e-close']);
            removeClass([leftBar], ['e-open']);
        } else if (e.targetItem === 'Minimize') {
            if (Browser.isDevice && Browser.isIos) {
                removeClass([sbCntEle, sbHdrEle], ['hide-header']);
            }
            removeClass([leftBar], ['e-close']);
            if (!Browser.isDevice) {
                addClass([leftBar], ['e-open']);
            }
        }
    }
    public actionCompleteHandler(): void {
        setTimeout(() => { this.rteObj.toolbarModule.refreshToolbarOverflow(); }, 400);
    }
}
