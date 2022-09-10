import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.scss']
})
export class CoachesComponent implements OnInit {
  coaches: any[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getCoaches();
  }

  getCoaches() {
    this.dataService.getAllCoaches().subscribe((data: any) => {
      this.coaches = data;
    });
  }

  selectedCoach!: any;
  isCoachDetailsModalOpen: boolean = false;
  openCoachDetails(coach: any) {
    this.selectedCoach = coach;
    this.isCoachDetailsModalOpen = coach;
    console.log(coach);
  }


}
