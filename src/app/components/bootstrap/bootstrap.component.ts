import { Component, ViewEncapsulation } from '@angular/core';
import {globalVariables} from'../bootstrap/chart.constatnts';
import {AppService} from './../../services/app.service';
// import * as Highcharts from "highcharts";

@Component({
    selector: 'my-app',
    // template: `<h1>Hello {{name}}</h1>`
    template: require('./bootstrap.template.pug'),
    // encapsulation: ViewEncapsulation.Native,
    encapsulation: ViewEncapsulation.Emulated,
    styles: [
        require('./bootstrap.component.styl')
    ]
})
export class BootstrapComponent {

    config = {
        style: 'blue',
        chart: {
            type: 'line'
        },
        title: {
            text: 'hello'
        },
        xAxis: {
            title: {
                text: 'Fruit eaten'
            },
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 2, 3]
        }, {
            name: 'John',
            data: [3, 2, 1]
        }]
    };
    value: any;
    objects: Array<any> = [];
    object: any = {};
    propFunctions: Array<any> = globalVariables.PROP_FUNCTIONS;
    propStyles: Array<any> = globalVariables.PROP_STYLES;
    chartTypes: Array<any> = globalVariables.CHART_TYPES;
    myChart: any;
    column: any;
    columns: Array<any> = []

    constructor(_appService: AppService) {

        _appService.stream$.subscribe(value => {
            console.log(value)
            switch (value.message) {
                case 'data':
                    this.objects = value.data;
                    break;
            }
        })
    }

    changedFieldHandler() {
        this.myChart.update(this.config)
    }
    changeObject(event: any) {
        // this.appService.getObject()
    }

    selectColumn() {
        console.warn('select', arguments)
    }
    ngOnInit() {
        // this.myChart = Highcharts.chart('container', this.config);

    }

    public selected(value: any): void {
        console.log('Selected value is: ', value);
    }

    public removed(value: any): void {
        console.log('Removed value is: ', value);
    }

    public typed(value: any): void {
        console.log('New search input: ', value);
    }

    public refreshValue(value: any): void {
        this.value = value;
    }

}