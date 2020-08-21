import { Injectable } from '@angular/core';
import { Flights } from '../moduls/flights.model'

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor() { }

  public flight: Flights;


  addFlight(flight: Flights){

    this.flight = flight;
  }
}
