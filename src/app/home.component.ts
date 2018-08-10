import {Component} from "@angular/core";
import {Router} from "@angular/router";
import * as $ from 'jquery';

@Component({
    selector: "app-home",
    templateUrl: './home.component.html'
})

export class HomeComponent {

    constructor(private router: Router) {

    }


}