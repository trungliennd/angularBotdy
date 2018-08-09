import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {AboutComponent} from "./about.component";
import {AuthGuard} from "./auth/auth.guard";
import {UserComponent} from "./user/user.component";
import {SignUpComponent} from "./user/sign-up/sign-up.component";
import {SignInComponent} from "./user/sign-in/sign-in.component";

const routing: Routes = [
    { path: '', component: HomeComponent},
    {
        path: 'signup', component: UserComponent,
        children: [{path: '', component: SignUpComponent}]
    },
    {
        path: 'login', component: UserComponent,
        children: [{path: '', component: SignInComponent}]
    },
    { path: 'about', component: AboutComponent}

];

export const appRoutes = RouterModule.forRoot(routing);