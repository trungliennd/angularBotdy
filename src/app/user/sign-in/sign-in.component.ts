import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {UserService} from "../../shared/user.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['../user.component.css']
})

export class SignInComponent implements  OnInit {

    isLoginError: boolean = false;
    constructor(private userService: UserService, private router: Router) {

    }

    ngOnInit(): void {
    }

    OnSubmit(userName, password) {
        this.userService.userAuthentication(userName, password).subscribe((data: any) => {
            localStorage.setItem('userToken', data.access_token);
            this.router.navigate(['/home']);
        }, (err: HttpErrorResponse) => {
            this.isLoginError = true;
        });
    }
}