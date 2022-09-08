import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { DataService } from 'src/app/shared/services/data.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private toast: HotToastService, private dataService: DataService) { }

  @Input() course: any;
  @Output() closeModal = new EventEmitter<boolean>();

  ngOnInit(): void {

    console.log(this.course)
  }

  courseDate = Date;

  nameOnCard!: string;
  cardNumber!: string;
  expiryDate!: string;
  cvv!: string;


  pay() {

    this.dataService.purchaseCourse(
      this.course.id,
      {
        nameOnCard: this.nameOnCard,
        cardNumber: this.cardNumber,
        expiryDate: this.expiryDate,
        cvv: this.cvv,
      },
      this.courseDate
    ).subscribe({
      next: (data: any) => {
        console.log(data)
        this.toast.success('Thank you for your purchase!', {
          position: 'top-right'
        });
        this.closeModal.emit(true)
      },
      error: (error: any) => {
        console.log(error)
        this.toast.error('Something went wrong! Please verify your card details and try again.', {
          position: 'top-right'
        });
      }
    })
  }
}

