System.config({
    transpiler: "typescript",
    typescriptOptions: {
        compilerOptions: {
            target: "umd",
            module: "commonjs",
            moduleResolution: "node",
            emitDecoratorMetadata: true,
            experimentalDecorators: true
        }
    },
    paths: {
        "syncfusion:": "{{:CDN_LINK}}",
        "angular:": "https://unpkg.com/@angular/"
    },
    map: {
        main: 'main.ts',
        typescript: "https://unpkg.com/typescript@2.2.2/lib/typescript.js",
        "plugin-json": "https://cdnjs.cloudflare.com/ajax/libs/systemjs-plugin-json/0.3.0/json.min.js",
        "@syncfusion/ej2-base": "syncfusion:ej2-base/dist/ej2-base.umd.min.js",
        "@syncfusion/ej2-buttons": "syncfusion:ej2-buttons/dist/ej2-buttons.umd.min.js",
        "@syncfusion/ej2-splitbuttons": "syncfusion:ej2-splitbuttons/dist/ej2-splitbuttons.umd.min.js",
        "@syncfusion/ej2-calendars": "syncfusion:ej2-calendars/dist/ej2-calendars.umd.min.js",
        "@syncfusion/ej2-charts": "syncfusion:ej2-charts/dist/ej2-charts.umd.min.js",
        "@syncfusion/ej2-diagrams": "syncfusion:ej2-diagrams/dist/ej2-diagrams.umd.min.js",
        "@syncfusion/ej2-maps": "syncfusion:ej2-maps/dist/ej2-maps.umd.min.js",
        "@syncfusion/ej2-treemap": "syncfusion:ej2-treemap/dist/ej2-treemap.umd.min.js",
        "@syncfusion/ej2-circulargauge": "syncfusion:ej2-circulargauge/dist/ej2-circulargauge.umd.min.js",
        "@syncfusion/ej2-data": "syncfusion:ej2-data/dist/ej2-data.umd.min.js",
        "@syncfusion/ej2-dropdowns": "syncfusion:ej2-dropdowns/dist/ej2-dropdowns.umd.min.js",
        "@syncfusion/ej2-grids": "syncfusion:ej2-grids/dist/ej2-grids.umd.min.js",
        "@syncfusion/ej2-inputs": "syncfusion:ej2-inputs/dist/ej2-inputs.umd.min.js",
        "@syncfusion/ej2-lists": "syncfusion:ej2-lists/dist/ej2-lists.umd.min.js",
        "@syncfusion/ej2-navigations": "syncfusion:ej2-navigations/dist/ej2-navigations.umd.min.js",
        "@syncfusion/ej2-popups": "syncfusion:ej2-popups/dist/ej2-popups.umd.min.js",
        "@syncfusion/ej2-lineargauge": "syncfusion:ej2-lineargauge/dist/ej2-lineargauge.umd.min.js",
        "@syncfusion/ej2-pdf-export": "syncfusion:ej2-pdf-export/dist/ej2-pdf-export.umd.min.js",
        "@syncfusion/ej2-compression": "syncfusion:ej2-compression/dist/ej2-compression.umd.min.js",
        "@syncfusion/ej2-excel-export": "syncfusion:ej2-excel-export/dist/ej2-excel-export.umd.min.js",
        "@syncfusion/ej2-file-utils": "syncfusion:ej2-file-utils/dist/ej2-file-utils.umd.min.js",
        "@syncfusion/ej2-svg-base": "syncfusion:ej2-svg-base/dist/ej2-svg-base.umd.min.js",
        "@syncfusion/ej2-documenteditor": "syncfusion:ej2-documenteditor/dist/ej2-documenteditor.umd.min.js",
        "@syncfusion/ej2-richtexteditor": "syncfusion:ej2-richtexteditor/dist/ej2-richtexteditor.umd.min.js",
        "@syncfusion/ej2-notifications": "syncfusion:ej2-notifications/dist/ej2-notifications.umd.min.js",
        "@syncfusion/ej2-heatmap": "syncfusion:ej2-heatmap/dist/ej2-heatmap.umd.min.js",
        "@syncfusion/ej2-pivotview": "syncfusion:ej2-pivotview/dist/ej2-pivotview.umd.min.js",
        "@syncfusion/ej2-schedule": "syncfusion:ej2-schedule/dist/ej2-schedule.umd.min.js",
        "@syncfusion/ej2-layouts": "syncfusion:ej2-layouts/dist/ej2-layouts.umd.min.js",

        "@syncfusion/ej2-angular-base": "syncfusion:ej2-angular-base/dist/ej2-angular-base.umd.min.js",
        "@syncfusion/ej2-angular-buttons": "syncfusion:ej2-angular-buttons/dist/ej2-angular-buttons.umd.min.js",
        "@syncfusion/ej2-angular-splitbuttons": "syncfusion:ej2-angular-splitbuttons/dist/ej2-angular-splitbuttons.umd.min.js",
        "@syncfusion/ej2-angular-calendars": "syncfusion:ej2-angular-calendars/dist/ej2-angular-calendars.umd.min.js",
        "@syncfusion/ej2-angular-charts": "syncfusion:ej2-angular-charts/dist/ej2-angular-charts.umd.min.js",
        "@syncfusion/ej2-angular-diagrams": "syncfusion:ej2-angular-diagrams/dist/ej2-angular-diagrams.umd.min.js",
        "@syncfusion/ej2-angular-maps": "syncfusion:ej2-angular-maps/dist/ej2-angular-maps.umd.min.js",
        "@syncfusion/ej2-angular-treemap": "syncfusion:ej2-angular-treemap/dist/ej2-angular-treemap.umd.min.js",
        "@syncfusion/ej2-angular-circulargauge": "syncfusion:ej2-angular-circulargauge/dist/ej2-angular-circulargauge.umd.min.js",
        "@syncfusion/ej2-angular-dropdowns": "syncfusion:ej2-angular-dropdowns/dist/ej2-angular-dropdowns.umd.min.js",
        "@syncfusion/ej2-angular-grids": "syncfusion:ej2-angular-grids/dist/ej2-angular-grids.umd.min.js",
        "@syncfusion/ej2-angular-inputs": "syncfusion:ej2-angular-inputs/dist/ej2-angular-inputs.umd.min.js",
        "@syncfusion/ej2-angular-lists": "syncfusion:ej2-angular-lists/dist/ej2-angular-lists.umd.min.js",
        "@syncfusion/ej2-angular-navigations": "syncfusion:ej2-angular-navigations/dist/ej2-angular-navigations.umd.min.js",
        "@syncfusion/ej2-angular-popups": "syncfusion:ej2-angular-popups/dist/ej2-angular-popups.umd.min.js",
        "@syncfusion/ej2-angular-lineargauge": "syncfusion:ej2-angular-lineargauge/dist/ej2-angular-lineargauge.umd.min.js",
        "@syncfusion/ej2-angular-documenteditor": "syncfusion:ej2-angular-documenteditor/dist/ej2-angular-documenteditor.umd.min.js",
        "@syncfusion/ej2-angular-richtexteditor": "syncfusion:ej2-angular-richtexteditor/dist/ej2-angular-richtexteditor.umd.min.js",
        "@syncfusion/ej2-angular-notifications": "syncfusion:ej2-angular-notifications/dist/ej2-angular-notifications.umd.min.js",
        "@syncfusion/ej2-angular-heatmap": "syncfusion:ej2-angular-heatmap/dist/ej2-angular-heatmap.umd.min.js",
        "@syncfusion/ej2-angular-pivotview": "syncfusion:ej2-angular-pivotview/dist/ej2-angular-pivotview.umd.min.js",
        "@syncfusion/ej2-angular-schedule": "syncfusion:ej2-angular-schedule/dist/ej2-angular-schedule.umd.min.js",
        "@syncfusion/ej2-angular-layouts": "syncfusion:ej2-angular-layouts/dist/ej2-angular-layouts.umd.min.js",

        '@angular/core': 'angular:core@5.2.10/bundles/core.umd.js',
        '@angular/common': 'angular:common@5.2.10/bundles/common.umd.js',
        '@angular/compiler': 'angular:compiler@5.2.10/bundles/compiler.umd.js',
        '@angular/http': 'angular:http@5.2.10/bundles/http.umd.js',
        '@angular/forms': 'angular:forms@5.2.10/bundles/forms.umd.js',
        '@angular/router': 'angular:router@5.2.10/bundles/router.umd.js',
        '@angular/platform-browser': 'angular:platform-browser@5.2.10/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'angular:platform-browser-dynamic@5.2.10/bundles/platform-browser-dynamic.umd.js',
        '@angular/material': 'angular:material@5.2.10/bundles/material.umd.js',
        'rxjs': 'https://unpkg.com/rxjs@5.5.10'
    },
    meta: {
        '*.json': { loader: 'plugin-json' }
    }
});

System.import('main.ts').catch(console.error.bind(console));
