import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLoginGroup: FormGroup;
  username='';
  password='';
  errorMsg: string = null;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    const username = this.username.trim();
    const password = this.password.trim();
    this.errorMsg = null;
    if (username.length === 0) {
      this.errorMsg = 'The username not be empty';
    }
    if (password.length < 6) {
      this.errorMsg = 'The password should be at least 6 characters long';
    }
    if (this.errorMsg) {
      return;
    }
    this.authService.login(username, password).subscribe((credentials) => {
      if (credentials.jwt) {
        this.router.navigate(['home']);
      }
    });
  }

}
