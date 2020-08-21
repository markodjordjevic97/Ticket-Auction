import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServisService } from 'src/app/servis.service';
import { FlightsService } from '../../servis/flights.service'

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.scss']
})
export class HeroPageComponent implements OnInit {
  constructor(private servis: ServisService, public flight: FlightsService) { }

  loginForm: FormGroup;
  log: boolean = false;
  name: string;
  email: string;

  ngOnInit(): void {

    this.servis.getRandomFlight().subscribe((data) => {
      
      this.flight.addFlight(data);
    })

    this.loginForm = new FormGroup({
      'email': new FormControl(null,[Validators.required, Validators.email]),
      'fullname': new FormControl(null, Validators.required)
    });
  }


  onSubmit(){
    this.email = this.loginForm.get('email').value;
    this.name = this.loginForm.get('fullname').value;
    this.servis.emailUser = this.email;
    this.servis.nameUser = this.name;
    this.servis.setUserData({email: this.email, name: this.name, flightID: this.flight.flight.flightID}).subscribe();
    this.log = true;
  }
}
