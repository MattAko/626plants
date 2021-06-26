import { Component, Input, OnInit } from '@angular/core';
import { Reservation } from '../../../shared/reservation.model';

@Component({
  selector: 'app-reservation-item',
  templateUrl: './reservation-item.component.html',
  styleUrls: ['./reservation-item.component.css']
})
export class ReservationItemComponent implements OnInit {
  @Input('res') reservation: Reservation;

  constructor() { }

  ngOnInit(): void {
  }

}
