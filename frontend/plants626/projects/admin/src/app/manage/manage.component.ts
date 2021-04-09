import { Component, OnInit } from '@angular/core';
import { ManagementService } from './management.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
  providers: [ManagementService]
})
export class ManageComponent implements OnInit {

  constructor(private manageService: ManagementService) { }

  ngOnInit(): void {
  }

}
