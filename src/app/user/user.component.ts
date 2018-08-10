import {Component, OnInit} from "@angular/core";
import {UserService} from "../shared/user.service";
import {ToastrService} from "ngx-toastr";
import {NgForm} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import * as $ from 'jquery';
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
    email: string = null;

    constructor(private userService: UserService, private toastr: ToastrService) {

    }

    ngOnInit() {
        this.pageUser();
    }

    OnSubmit(email) {
        this.userService.forgetPassWord(email).subscribe((data:any)=>{

        }, (err: HttpErrorResponse) => {

        });
    }

    pageUser() {
        $(function () {
            var form_modal = $('.user-modal'),
                form_login = form_modal.find('#login'),
                form_signup = form_modal.find('#signup'),
                form_forgot_password = form_modal.find('#reset-password'),
                form_modal_tab = $('.switcher'),
                tab_login = form_modal_tab.children('li').eq(0).children('a'),
                tab_signup = form_modal_tab.children('li').eq(1).children('a'),
                forgot_password_link = form_login.find('.form-bottom-message a'),
                back_to_login_link = form_forgot_password.find('.form-bottom-message a');
            form_modal.addClass('is-visible');
            //switch from a tab to another
            form_modal_tab.on('click', function(event) {
                event.preventDefault();
                ( $(event.target).is( tab_login ) ) ? login_selected() : signup_selected();
            });

            $('.hide-password').on('click', function(){
                var $this= $(this),
                    $password_field = $this.prev('input');

                ( 'password' == $password_field.attr('type') ) ? $password_field.attr('type', 'text') : $password_field.attr('type', 'password');
                ( 'Show' == $this.text() ) ? $this.text('Hide') : $this.text('Show');
                //focus and move cursor to the end of input field
               /* $password_field.putCursorAtEnd();*/
            });

            //show forgot-password form
            forgot_password_link.on('click', function(event){
                event.preventDefault();
                forgot_password_selected();
            });

            function forgot_password_selected(){
                form_login.removeClass('is-selected');
                form_login.addClass('not-selected');
                form_signup.removeClass('is-selected');
                form_forgot_password.addClass('is-selected');
            }

            //back to login from the forgot-password form
            back_to_login_link.on('click', function(event){
                event.preventDefault();
                login_selected();
            });

            function login_selected(){
                form_login.removeClass('not-selected');
                form_login.addClass('is-selected');
                form_signup.removeClass('is-selected');
                form_forgot_password.removeClass('is-selected');
                tab_login.addClass('selected');
                tab_signup.removeClass('selected');
            }

            function signup_selected(){
                form_login.removeClass('is-selected');
                form_login.addClass('not-selected');
                form_signup.addClass('is-selected');
                form_forgot_password.removeClass('is-selected');
                tab_login.removeClass('selected');
                tab_signup.addClass('selected');
            }

            //REMOVE THIS - it's just to show error messages
            form_login.find('input[type="submit"]').on('click', function(event){
                event.preventDefault();
                form_login.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
            });
            form_signup.find('input[type="submit"]').on('click', function(event){
                event.preventDefault();
                form_signup.find('input[type="email"]').toggleClass('has-error').next('span').toggleClass('is-visible');
            });
        });
    }
}