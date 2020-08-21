import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServisService } from 'src/app/servis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  
  logedIn = false;
  emailTest: string;
  passTest: string;
  loginForm: FormGroup;
  constructor(public servis: ServisService, public router: Router) {}

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(5)])
    })
  }


  
  onSubmit() {
    this.emailTest = this.loginForm.get('email').value;
    this.passTest = this.loginForm.get('password').value;

    this.servis.emailAdmin === this.emailTest && this.servis.passwAdmin === this.passTest ? this.router.navigate(['/Admin']) : null;
  }

}
