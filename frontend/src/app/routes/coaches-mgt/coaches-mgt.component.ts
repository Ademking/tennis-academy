import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coaches-mgt',
  templateUrl: './coaches-mgt.component.html',
  styleUrls: ['./coaches-mgt.component.scss']
})
export class CoachesMgtComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  coaches = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@test.com',
      phone: '+1 (123) 456-7890',
      address: '123 Main St, Anywhere, USA'
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane@test.com',
      phone: '+1 (123) 456-7890',
      address: '123 Main St, Anywhere, USA'
    },
    {
      id: 3,
      name: 'Jack Doe',
      email: 'jack@test.com',
      phone: '+1 (123) 456-7890',
      address: '123 Main St, Anywhere, USA'
    }
  ]

  isNewModalOpen = false;
  isEditModalOpen = true

  toggleNewModal() {
    this.isNewModalOpen = !this.isNewModalOpen;
  }

  toggleEditModal() {
    this.isEditModalOpen = !this.isEditModalOpen;
  }

}
