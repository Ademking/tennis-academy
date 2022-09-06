import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { HotToastService } from '@ngneat/hot-toast';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',

  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

   items!: MenuItem[];

  constructor(private toast: HotToastService) { }

  ngOnInit(): void {
    this.items = [
      {label:'Categories'},
      {label:'Sports'},
      {label:'Football'},
      {label:'Countries'},
      {label:'Spain'},
      {label:'F.C. Barcelona'},
      {label:'Squad'},
      {label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'}
  ];
  }

  value!: Date;

  userData: any = {
    imgSrc: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    name: 'John Doe',
    occupation: 'Student'
  }


}
