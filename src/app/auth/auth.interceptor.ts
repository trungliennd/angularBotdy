import {HttpInterceptor, HttpRequest, HttpHandler, HttpUserEvent, HttpEvent} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {UserService} from "../shared/user.service";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {catchError} from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router, private userService: UserService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.headers.get('No-Auth') == 'True') {
            return next.handle(req.clone());
        }

        if(localStorage.getItem('userToken') != null) {
            const clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer" + localStorage.getItem('userToken'))
            });
            return next.handle(clonedreq).pipe(catchError(err => {
                if (err.status === 401) {
                    // auto logout if 401 response returned from api
                    this.router.navigateByUrl('/login');
                }
                const error = err.error.message || err.statusText;
                return throwError(error);
            }))
        }else {
            this.router.navigateByUrl('/login');
        }
    }

}