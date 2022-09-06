import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ViewContainerRef } from "@angular/core";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('AnimationTrigger0', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('200ms ease-in', style({ opacity: 0 }))
      ])
    ]),
    trigger('AnimationTrigger1', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(1rem)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'translateY(0)' }),
        animate('200ms ease-in', style({ opacity: 0, transform: 'translateY(1rem)' }))
      ])
    ])
  ]
})
export class ModalComponent implements OnInit {


  constructor() { }

  @Input() isVisible: boolean = false
  @Output() isVisibleChange = new EventEmitter<boolean>();

  @ContentChild('title') title!: TemplateRef<any>;
  @ContentChild('container') container!: TemplateRef<any>;
  @ContentChild('footer') footer!: TemplateRef<any>;

  toggleModal(): void {
    this.isVisible = !this.isVisible;
    this.isVisibleChange.emit(this.isVisible);
  }

  ngOnInit(): void {

  }

}





