import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightsService } from 'src/app/servis/flights.service';
import { ServisService } from 'src/app/servis.service';

@Component({
  selector: 'app-auction-confirm',
  templateUrl: './auction-confirm.component.html',
  styleUrls: ['./auction-confirm.component.scss']
})
export class AuctionConfirmComponent implements OnInit {
  constructor(public route: Router, public flight: FlightsService, private servis: ServisService) { }

  ngOnInit() {
    
  }

  onYes(){

    this.route.navigate([`auctions/${this.flight.flight.flightID}/${this.servis.emailUser}`]);
  }
}
