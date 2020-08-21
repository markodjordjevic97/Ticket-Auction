import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';

export class RoomsModel{

    currentBid: number;
    roomID: string;
    time: {
        _seconds: number;
        _nanoseconds: number;
    }

    constructor(m: number, r: string, s: number, n: number){

        this.currentBid = m;
        this.roomID = r;
        this.time._seconds = s;
        this.time._nanoseconds = n;
    }
}