import { Component, OnInit } from '@angular/core';
import { ServisService } from 'src/app/servis.service';
import { FlightsService } from 'src/app/servis/flights.service';
import { Flights } from '../../moduls/flights.model';
/* import { Flights } from '../../moduls/Flights'; */

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {



  // Information
  fromPlace: string = 'New York';
  toPlace: string = 'Dublin';
  time: string = 'Tue, 15 Dec 2020';
  
  // Time
  vremePolaska: string = '17:30'
  vremeDolaska: string = '04:45'
  constructor( public flight: FlightsService) {}

  ngOnInit() {}

}
