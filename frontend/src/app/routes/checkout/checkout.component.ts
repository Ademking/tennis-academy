import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private toast: HotToastService) { }

  @Output() closeModal = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  courseDate = Date;

  nameOnCard!: string;
  cardNumber!: string;
  expiryDate!: string;
  cvv!: string;

  showToast(message: string){
    this.toast.success(message, {
      position: 'top-right'
    });
  }

  pay(){
    this.showToast('Thank you for your purchase!');
    // close the checkout modal
    this.closeModal.emit(true);
  }
}
