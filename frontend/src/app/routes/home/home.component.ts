import { Component, Inject, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('AnimationTrigger0', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(.95)' }),
        animate('150ms ease-out', style({  opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'scale(1)' }),
        animate('100ms ease-in', style({ opacity: 0, transform: 'scale(.95)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) { }

  ngOnInit(): void {
  }

  isMenuOpen = false;


  toggleMenuOpen() {
    this.isMenuOpen = !this.isMenuOpen;
  }


  scrollToElement($element: string): void {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: $element,
      scrollOffset: 0,
      duration: 500
    });

    if (this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

}
