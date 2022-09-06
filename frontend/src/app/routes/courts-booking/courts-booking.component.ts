import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courts-booking',
  templateUrl: './courts-booking.component.html',
  styleUrls: ['./courts-booking.component.scss']
})
export class CourtsBookingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showCourtBookingModal = false;

  toggleCourtBookingModal() {
    this.showCourtBookingModal = !this.showCourtBookingModal;
  } 
}
