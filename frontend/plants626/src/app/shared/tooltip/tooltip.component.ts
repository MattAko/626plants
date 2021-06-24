import { Component, ElementRef, Input } from "@angular/core";

@Component({
    selector: 'app-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.css'],
})
export class TooltipComponent{
    @Input('msg') msg: string = '';
    visible: boolean = false;

    constructor(){ }

    mouseEnter(){
        this.visible = true;
    }

    mouseLeave(){
        this.visible = false;
    }
}