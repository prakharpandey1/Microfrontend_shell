import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  value: any=[];
  constructor(private route:Router){
    fromEvent(window,'event').subscribe((event)=>{
      console.log(event);
      this.value=event;
    })
  }
}
