import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DefaultRTEComponent } from './rich-text-editor.component';
import { ResizeComponent } from './resize-editor.component';
import { FullFeatureComponent } from './tools.component';
import { EventsComponent } from './client-side-events.component';
import { APIComponent } from './api.component';
import { IFrameComponent } from './iframe.component';
import { InlineComponent } from './inline.component';
import { ToolbarTypeComponent } from './types.component';
import { InsertSpecialCharactersComponent } from './insert-special-characters.component';
import { PasteCleanupComponent } from './paste-cleanup.component';
import { ImageComponent } from './image.component';
import { MarkdownDefaultComponent } from './markdown-editor.component';
import { MarkdownPreviewComponent } from './markdown-editor-preview.component';
import { MarkdownCustomComponent } from './markdown-editor-custom-format.component';
import { PrintComponent } from './print.component';
import { BlogPostComponent } from './blog-posting.component';
import { AjaxLoadComponent } from './ajax-load.component';
import { FormComponent } from './reactive-form.component';
import { TemplateDrivenComponent } from './template-driven.component';
import { SharedModule } from '../common/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { RadioButtonModule } from '@syncfusion/ej2-angular-buttons'
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { BrowserModule } from '@angular/platform-browser';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { InsertEmoticonsComponent } from './insert-emoticons.component';
import { ButtonModule} from '@syncfusion/ej2-angular-buttons';
import { TabModule } from '@syncfusion/ej2-angular-navigations';
import { AutoSaveComponent } from './auto-save.component';
import { SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { TributeComponent } from './tribute.component';

export const rteAppRoutes: Object[] = [
    { path: ':theme/rich-text-editor/tools', component: FullFeatureComponent, name: 'Overview',type:'update', description: 'This demo shows the overview of an HTML and markdown editor using Syncfusion angular rich text editor component.', order: '01', category: 'Rich Text Editor' },
    { path: ':theme/rich-text-editor/rich-text-editor', component: DefaultRTEComponent, name: 'Default Functionalities', description: 'This demo for Syncfusion angular  rich text editor component shows the default rendering with minimum configuration.', order: '01', category: 'Rich Text Editor' },
    { path: ':theme/rich-text-editor/image', component: ImageComponent,type:'update', name: 'Image', description: 'This demo for Syncfusion angular  rich text editor component shows the option to insert images to your content with image caption and link URLs to images.', order: '01', category: 'Rich Text Editor' },
    { path: ':theme/rich-text-editor/inline', component: InlineComponent, name: 'Inline', description: 'This demo for Syncfusion angular rich text editor component demonstrates on how to activate the editor on demand while editing the content.', order: '01', category: 'Rich Text Editor' },
    { path:':theme/rich-text-editor/paste-cleanup', component:PasteCleanupComponent,type:'update', name:'Paste from MS Word', description:'This demo demonstrate the paste cleanup feature in Syncfusion angular rich text editor component.', order:'01', category:'Rich Text Editor' },
    { path: ':theme/rich-text-editor/iframe', component: IFrameComponent, name: 'IFrame', description: 'This demo for Syncfusion angular rich text editor component demonstrates the default rendering of the rich text editor in iframe mode.', order: '01', category: 'Rich Text Editor' },
    { path: ':theme/rich-text-editor/print', component: PrintComponent, name: 'Print', description: 'This demo for Syncfusion angular rich text editor component shows how to print the content of the editor with its styles.', order: '01', category: 'Rich Text Editor' },
    { path: ':theme/rich-text-editor/ajax-load', component: AjaxLoadComponent, name: 'Ajax Content', description: 'This demo for Syncfusion angular rich text editor component demonstrates how to load content to the editor from an external source using Ajax library.', order: '01', category: 'Rich Text Editor' },
    { path: ':theme/rich-text-editor/resize-editor', component: ResizeComponent,type:'new', name: 'Resizable Editor', description: 'This demo for Syncfusion angular rich text editor component shows how to resize the editor.', order: '01', category: 'Rich Text Editor' },
    { path: ':theme/rich-text-editor/api', component: APIComponent, name: 'API', description: 'This demo demonstrate the usage of API in Syncfusion angular rich text editor component.', order: '01', category: 'Rich Text Editor' },
    { path: ':theme/rich-text-editor/client-side-events', component: EventsComponent,type:'update', name: 'Events', description: 'This demo for Syncfusion angular rich text editor component shows the events that have been triggered during the RichTextEditor operations.', order: '01', category: 'Rich Text Editor' },
    { path: ':theme/rich-text-editor/blog-posting', component: BlogPostComponent, name: 'Use Case', description: 'This demo for Syncfusion angular rich text editor component demonstrates how to design forum application using RichTextEditor.', order: '01', category: 'Rich Text Editor' },
    { path: ':theme/rich-text-editor/auto-save', component: AutoSaveComponent, name: 'Auto Save', type: 'new', description: 'This demo for Syncfusion angular rich text editor component demonstrates RichTextEditor will be save content every 10 seconds.', order: '01', category: 'Rich Text Editor' },
    { path: ':theme/rich-text-editor/types', component: ToolbarTypeComponent, name: 'Type', description: 'This demo for Syncfusion angular rich text editor component demonstrates the different behavior of toolbar support in the RichTextEditor.', order: '02', category: 'Toolbar' },
    { path: ':theme/rich-text-editor/insert-emoticons', component: InsertEmoticonsComponent, name: 'Insert Emoticons', description: 'This example demonstrate how to add emoticons symbol in the rich text editor.Custom animal and smiley emoticons are added in thre rich text editor', order: '03', category: 'Custom Tool' },
    { path: ':theme/rich-text-editor/insert-special-charcters', component: InsertSpecialCharactersComponent, name: 'Insert Special Characters', description: 'This demo for Syncfusion angular rich text editor component shows the users to add their commands to the toolbar along with the built-in commands.', order: '03', category: 'Custom Tool' },
    { path: ':theme/rich-text-editor/markdown-editor', component: MarkdownDefaultComponent, type:'update', name: 'Overview', description: 'This demo for Syncfusion angular rich text editor component shows the markdown editing in the rich text editor with complete features.', order: '04', category: 'Markdown Editor'},
    { path: ':theme/rich-text-editor/markdown-editor-preview', component: MarkdownPreviewComponent, name: 'Preview', description: 'This demo for Syncfusion angular rich text editor component shows the users to switch between editing content and its visual preview in Markdown Editor.', order: '04', category: 'Markdown Editor' },
    { path: ':theme/rich-text-editor/markdown-editor-custom-format', component: MarkdownCustomComponent, name: 'Custom Format', description: 'This demo for Syncfusion angular rich text editor component demonstrates on how to customize tags of markdown formatting in RichTextEditor.', order: '04', category: 'Markdown Editor' },
    { path: ':theme/rich-text-editor/reactive-form', component: FormComponent, name: 'Reactive Form', description: 'This demo explains the reactive forms support of the Syncfusion angular rich text editor component.', order: '07', category: 'Forms' },
    { path: ':theme/rich-text-editor/template-driven', component: TemplateDrivenComponent, name: 'Template Driven', description: 'This demo explains the template-driven forms support of the Syncfusion angular rich text editor component.', order: '07', category: 'Forms' },
    { path: ':theme/rich-text-editor/tribute', component: TributeComponent,type:'new', name: 'Tribute JS', description: 'This demo explains how to integrate the tribute.js library to Syncfusion angular rich text editor component.', order: '08', category: 'Third-parties Integration' }
];

export const RTERouter: ModuleWithProviders = RouterModule.forChild(rteAppRoutes);

@NgModule({
    imports: [BrowserModule, RTERouter, SharedModule, FormsModule, ReactiveFormsModule,TabModule,
        RichTextEditorAllModule, CheckBoxModule, DialogModule, NumericTextBoxModule,ButtonModule,SwitchModule, RadioButtonModule, TextBoxModule, DropDownListModule],
    exports: [RichTextEditorAllModule, CheckBoxModule, SwitchModule, DialogModule,TabModule, NumericTextBoxModule,ButtonModule, RadioButtonModule, TextBoxModule, DropDownListModule],
    declarations: [
        DefaultRTEComponent,
        FullFeatureComponent,
        APIComponent,
        EventsComponent,
        IFrameComponent,
        ToolbarTypeComponent,
        PasteCleanupComponent,
        ResizeComponent,
        InlineComponent,
        InsertSpecialCharactersComponent,
        InsertEmoticonsComponent,
        ImageComponent,
        MarkdownDefaultComponent,
        MarkdownPreviewComponent,
        MarkdownCustomComponent,
        PrintComponent,
        BlogPostComponent,
        AjaxLoadComponent,
        FormComponent,
        TemplateDrivenComponent,
        InsertEmoticonsComponent,
        AutoSaveComponent,
        TributeComponent

    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RTESampleModule {
}