import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-userlayout',
  templateUrl: './userlayout.component.html',
  styleUrls: ['./userlayout.component.scss']
})
export class UserlayoutComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    const titleCase = (str: string) => {
      return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
    }

    this.dataService.myData().subscribe({
      next: (data: any) => {
        this.userData = {
          name: data.user.firstname + ' ' + data.user.lastname,
          imgSrc: data.user.avatar,
          occupation: titleCase(data.role)
        }
      },
      error: (err) => {

      }
    })

  }



  userData!: any

}
