import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ServisService }  from '../../../servis.service'

@Component({
  selector: 'app-admin-pop-up',
  templateUrl: './admin-pop-up.component.html',
  styleUrls: ['./admin-pop-up.component.scss']
})
export class AdminPopUpComponent implements OnInit {
  
  bidingForm: FormGroup;
  constructor(public route: ActivatedRoute, public servis: ServisService, public r: Router) { }

  ngOnInit(): void {
    this.bidingForm = new FormGroup({

      'bidingPrice': new FormControl(null, Validators.required)
    })
  }
  onBidSubmit(){
    this.servis.minBid = this.bidingForm.get('bidingPrice').value;
    this.route.params.subscribe((parms) => {
      this.servis.startAuction(parms.flightID, {minCost: this.servis.minBid, number: 2, time: {_seconds: 23123123, _nanoseconds: 0}}).subscribe(()=>{ })
    })

    this.route.params.subscribe((parms) => {
      this.servis.startAuction(parms.flightID, {minCost: this.servis.minBid, number: 2, time: {_seconds: 23123123, _nanoseconds: 0}}).subscribe(()=>{ })
    })
    
    this.r.navigate(['/Admin']);
  }

}
