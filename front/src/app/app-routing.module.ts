import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroPageComponent } from './components/hero-page/hero-page.component';
import { RoomComponent } from './room/room.component';
import { RoomsComponent } from './room/rooms/rooms.component';
import { AuctionConfirmComponent } from './components/auction-confirm/auction-confirm.component';
import { AdminRoomComponent } from './components/admin-room/admin-room.component';
import { AdminHeroPageComponent } from './components/admin-room/admin-hero-page/admin-hero-page.component';
import { AdminPopUpComponent } from './components/admin-room/admin-pop-up/admin-pop-up.component';

const routes: Routes = [
  {path: "", component: HeroPageComponent},
  {path: "auctions/:flightID/:userID", component: RoomComponent},
  {path: "Admin/:flightID", component: AdminRoomComponent},
  {path: "Admin", component: AdminHeroPageComponent},
  {path: "RoomPage", component: RoomComponent},
  /* {path: "AdminPopUp", component: AdminPopUpComponent} */
  {path: "AdminPopUp/:flightID", component: AdminPopUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
