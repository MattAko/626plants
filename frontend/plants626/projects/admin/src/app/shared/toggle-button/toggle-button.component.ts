import { Component } from "@angular/core";
import { ManagementService } from "../../manage/management.service";

@Component({
    selector: 'app-toggle-button',
    styleUrls: ['./toggle-button.component.css'],
    template: '<input (click)="Toggle()" type="checkbox" id="switch" /><label for="switch"></label>'
})
export class ToggleButton{
    toggle: boolean = true;
    constructor(private managementService: ManagementService){ }

    Toggle(){
        this.toggle = !this.toggle;
        this.managementService.getShop(this.toggle)
    }
}