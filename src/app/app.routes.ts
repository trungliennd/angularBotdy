import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {AboutComponent} from "./about.component";

const routing: Routes = [
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent}

];

export const appRoutes = RouterModule.forRoot(routing);