import { Component } from '@angular/core';
import { ServisService } from './servis.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public servis: ServisService){}
}
