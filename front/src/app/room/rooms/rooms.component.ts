import { Component, OnInit} from '@angular/core';
import { ServisService } from 'src/app/servis.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FlightsService } from 'src/app/servis/flights.service';
import { Flights } from '../../moduls/flights.model'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})


export class RoomsComponent implements OnInit{

  listPackage: string [] = ['A seat that seamlessly reclines into a fully flat bed', 'Menu of regionally inspired gourmet dishes', 'Excellent service'];
  public flight: Flights; 

  bids: number = 0;
  bidingForm: FormGroup;
  biding_Price: number = 1000;
  bid_placeHolder: number = 1000;

  constructor(public servis: ServisService, public flights: FlightsService, public router: ActivatedRoute) { 
    this.flight = flights.flight;
  }

  ngOnInit() {

    this.bidingForm = new FormGroup({

      'bidingPrice': new FormControl(null, Validators.required)
    })

    this.router.params.subscribe((parms) => {
      this.servis.getAuctions(parms.flightID).subscribe(res => {

        this.bids = res[0].currentBid;
        console.log(res[0].currentBid)
      })
    })

    setInterval(() => {
      /* this.servis.bids = []; */
      this.servis.getBid(this.servis.rooms[this.servis.index].roomID).subscribe((res) => {

        this.bids = res[0].bid;
    })  
  }, 1000);
    
}

  /* Submit za bid fromu */
  onBidSubmit(){

    this.bidingForm.get('bidingPrice').value <= this.biding_Price ? alert('Error! You have entered a price below the current bid or the same as the current bid') : this.biding_Price = parseInt(this.bidingForm.get('bidingPrice').value);
    

    /* Slanje manuel bida */
    this.router.params.subscribe((parms) => {

      this.servis.setBid({flightID: parms.flightID, roomID: this.servis.rooms[this.servis.index].roomID, email: this.servis.emailUser, bid: this.biding_Price}).subscribe((res) => {});
    })


    this.bid_placeHolder = this.biding_Price; 
  }

  onLeaveAuction(){
    this.servis.leaveauction = true;
    window.location.reload();
  }
}
