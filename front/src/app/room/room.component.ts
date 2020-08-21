import { Component, OnInit } from '@angular/core';
import { ServisService } from '../servis.service';
import { FlightsService } from 'src/app/servis/flights.service';
import { ActivatedRoute } from '@angular/router';
import { RoomsModel } from '../moduls/rooms.model';
import { BidModel } from '../moduls/bid.model';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  show_Room: boolean = false;
  show_Spiner: boolean = false;

  
  public rooms: RoomsModel [] = [];
  avtiveRomes: number = 0;

  public bids: BidModel[] = [];
  public email: string;

  constructor(public servis: ServisService, public flight: FlightsService, public route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe((parms) => {
      this.email = parms.userID;
      this.servis.getAuctions(parms.flightID).subscribe(res => {

        res.forEach((el) => {
          this.rooms.push(el);
          this.avtiveRomes++;
        })

        this.servis.rooms = this.rooms;
      })

      this.servis.getOneFlight(parms.flightID).subscribe((res) => {

        this.flight.addFlight(res);
      })
    })
  }

  onShowRoom(roomIndex: number){

    this.servis.getBid(this.rooms[roomIndex].roomID).subscribe((res) => {
      res.forEach((el) => {

        this.bids.push(el);
      })
    })

    this.servis.bids = this.bids;
    this.servis.emailUser = this.email;


    document.getElementById("goto").scrollIntoView({behavior: 'smooth'});
    this.servis.index = roomIndex;
    this.show_Spiner = true;
    this.servis.leaveauction = false;

    setInterval(() => {
        this.show_Room = true;
        this.show_Spiner = false;
    }, 1000);
  }
}
