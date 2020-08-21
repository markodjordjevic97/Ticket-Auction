import { Component, OnInit } from '@angular/core';
import { ServisService } from 'src/app/servis.service';
import { Flights } from 'src/app/moduls/flights.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-hero-page',
  templateUrl: './admin-hero-page.component.html',
  styleUrls: ['./admin-hero-page.component.scss']
})
export class AdminHeroPageComponent implements OnInit {

  flights: Flights[] = [];
  constructor(public servis: ServisService, 
              public route: Router) { }

  ngOnInit(): void {
    this.servis.getFlights().subscribe((res)=> {
      res.forEach((el) => {
        this.flights.push(el);
      })
    })
  }

  onStartAuction(flightID: string, index: number){

    this.flights[index].auctionStarted = this.flights[index].auctionStarted;
    this.route.navigate([`/AdminPopUp/${flightID}`]);
  }
  onViewAuction(flightID: string){
    
    this.route.navigate([`/Admin/${flightID}`]);
  }
  onStopAuction(flightID: string, index: number){

    this.servis.deleteAuction(flightID).subscribe(() => {})
    this.flights[index].auctionStarted = !this.flights[index].auctionStarted;
  }
  

}
