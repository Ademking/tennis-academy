import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-guidelines',
  templateUrl: './guidelines.component.html',
  styleUrls: ['./guidelines.component.scss']
})
export class GuidelinesComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getGuidelines();
  }

  markdown = ``;


  getGuidelines(){
    this.dataService.getGuidelines().subscribe({
      next: (data: any) => {
        this.markdown = data.guidelines;
      }
    })
  }
}
