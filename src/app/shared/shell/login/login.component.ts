import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth-service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


    loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    })
  constructor(private auth: AuthService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    if(this.auth.isLoggedIn()){
      this.router.navigate(['admin/products'])
    }
  }
  onSubmit(): void{
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    if(this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe((userDetails) => {
        console.log('result', userDetails);
        if(userDetails.role === 'admin') {
          this.auth.userDetails.next(userDetails)
          this.router.navigate(['admin/products']);
          return;
        }
      })
    }
  }

}
