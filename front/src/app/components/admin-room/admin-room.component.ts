import { Component, OnInit } from '@angular/core';
import { ServisService } from '../../../../src/app/servis.service';
import { ActivatedRoute } from '@angular/router';
import { RoomsModel } from 'src/app/moduls/rooms.model';

@Component({
  selector: 'app-admin-room',
  templateUrl: './admin-room.component.html',
  styleUrls: ['./admin-room.component.scss']
})
export class AdminRoomComponent implements OnInit {


  constructor(public service: ServisService, public router: ActivatedRoute) {}
  rooms: RoomsModel[] = [];

  ngOnInit(): void {

    this.router.params.subscribe((parms) => {

      this.service.getAuctions(parms.flightID).subscribe((res) => {
        res.forEach((el) => {
          this.rooms.push(el);
        })    
      })
    })
  }
  onStopAuction() {}
}
