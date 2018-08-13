import {Component} from "@angular/core";
import {Router, Routes} from "@angular/router";

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html'

})

export class AboutComponent {
    constructor(private router: Router) {

    }
}