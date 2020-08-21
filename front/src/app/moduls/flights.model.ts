export class Flights{
    public auctionStarted: boolean;
    public destination: string;
    public flightID: string;
    public origin: string;
    public bc: number;
    public travelDate: { 
        _seconds: number, 
        _nanosec: number
    }
}