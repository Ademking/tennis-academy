import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-adminlayout',
  templateUrl: './adminlayout.component.html',
  animations: [
    trigger('AnimationTrigger0', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease', style({  opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('300ms ease', style({ opacity: 0 }))
      ])
    ]),
    trigger('AnimationTrigger1', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms ease-in-out', style({  transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)' }),
        animate('300ms ease-in-out', style({ transform: 'translateX(-100%)' }))
      ])
    ]),
    trigger('AnimationTrigger2', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in-out', style({  opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('300ms ease-in-out', style({ opacity: 0 }))
      ])
    ]),
    trigger('AnimationTrigger3', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(.95)' }),
        animate('100ms ease-out', style({  opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'scale(1)' }),
        animate('75ms ease-in', style({ opacity: 0, transform: 'scale(.95)' }))
      ])
    ])
  ],
  styleUrls: ['./adminlayout.component.scss']
})
export class AdminlayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  isOffCanvasMenu = false;
  isMenu = false;


  toggleOffCanvasMenu(){
    this.isOffCanvasMenu = !this.isOffCanvasMenu;
  }
  toggleMenu(){
    this.isMenu = !this.isMenu;
  }


  routes = [
    { name: 'Dashboard', route: 'dashboard', icon: `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 19V5h6v14H5zm14 0h-6v-7h6v7zm0-9h-6V5h6v5z" opacity=".3"/><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 19V5h6v14H5zm14 0h-6v-7h6v7zm0-9h-6V5h6v5z"/></svg>` },
    { name: 'Courses', route: 'courses', icon: `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21 17v-6.9L12 15L1 9l11-6l11 6v8Zm-9 4l-7-3.8v-5l7 3.8l7-3.8v5Z"/></svg>` },
    { name: 'Coaches', route: 'coaches', icon: `<svg width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h13.4a7.9 7.9 0 0 0 7.2-4.6a48.1 48.1 0 0 1 86.8 0a7.9 7.9 0 0 0 7.2 4.6H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16ZM104 168a32 32 0 1 1 32-32a32.1 32.1 0 0 1-32 32Zm112 32h-56.6a63.7 63.7 0 0 0-13.1-16H192a8 8 0 0 0 8-8V80a8 8 0 0 0-8-8H64a8 8 0 0 0-8 8v96a8 8 0 0 0 6 7.7A64.2 64.2 0 0 0 48.6 200H40V56h176Z"/></svg>` },
    { name: 'Courts', route: 'courts', icon: `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3.425 20L2 18.6l4.1-4.1q.775-.775 1.062-1.938Q7.45 11.4 7.45 9q0-1.45.65-2.85q.65-1.4 1.85-2.6q2.275-2.275 5.025-2.575q2.75-.3 4.525 1.525q1.8 1.8 1.5 4.55q-.3 2.75-2.55 5q-1.2 1.2-2.6 1.85q-1.4.65-2.85.65q-2.425 0-3.55.275T7.525 15.9Zm6.875-8.35q1.175 1.15 3.175.85q2-.3 3.575-1.875q1.6-1.6 1.913-3.588q.312-1.987-.863-3.112q-1.2-1.2-3.137-.9q-1.938.3-3.563 1.9Q9.825 6.5 9.488 8.488q-.338 1.987.812 3.162ZM18 23q-1.65 0-2.825-1.175Q14 20.65 14 19q0-1.65 1.175-2.825Q16.35 15 18 15q1.65 0 2.825 1.175Q22 17.35 22 19q0 1.65-1.175 2.825Q19.65 23 18 23Z"/></svg>` },
    { name: 'Players', route: 'players', icon: `<svg width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M166.5 192.8a7.8 7.8 0 0 1 .6 8.3a8.1 8.1 0 0 1-7.1 4.3H16a8.1 8.1 0 0 1-7.1-4.3a7.8 7.8 0 0 1 .6-8.3a95.5 95.5 0 0 1 45.3-34.9a60 60 0 1 1 66.4 0a95.5 95.5 0 0 1 45.3 34.9Zm81.6 0a96.3 96.3 0 0 0-45.4-34.9A59.9 59.9 0 0 0 169.5 48a64 64 0 0 0-16.3 2.2a8.2 8.2 0 0 0-5.4 5.2a8 8 0 0 0 1.2 7.3a75.8 75.8 0 0 1 3.8 84.9a8.1 8.1 0 0 0 2.1 10.6q4.5 3.5 8.7 7.2l.5.5a112.6 112.6 0 0 1 25.5 34.9a7.9 7.9 0 0 0 7.2 4.6h44.7a8.1 8.1 0 0 0 7.1-4.3a8 8 0 0 0-.5-8.3Z"/></svg>` },
    { name: 'Guidelines', route: 'guidelines', icon: `<svg width="24" height="24" viewBox="0 0 48 48"><mask id="svgIDa"><g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><path stroke-linecap="round" d="M24 4v37"/><path fill="#fff" d="M24 8h15.545L42 12l-2.455 4H24V8Zm0 14H8.455L6 26l2.455 4H24v-8Z"/><path stroke-linecap="round" d="M16 42h16"/></g></mask><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#svgIDa)"/></svg>` },
    { name: 'Forum', route: 'forum', icon: `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15 11V4H4v8.17L5.17 11H6z" opacity=".3"/><path fill="currentColor" d="M16 13c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10zm-12-.83V4h11v7H5.17L4 12.17zM22 7c0-.55-.45-1-1-1h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7z"/></svg>` },
  ]

}
