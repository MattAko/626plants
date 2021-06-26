import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Reservation } from '../../shared/reservation.model';
import { ManagementService } from '../management.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit, OnDestroy {
  reservations: Reservation[]
  reservationSubscription: Subscription;

  constructor(private manage: ManagementService) { }

  ngOnInit(): void {
    this.manage.fetchReservations();
    this.reservationSubscription = this.manage.reservationsChanged.subscribe((reservations => {
      this.reservations = reservations;
      console.log(this.reservations);
    }))
  }

  ngOnDestroy(){
    this.reservationSubscription.unsubscribe();
  }
}
