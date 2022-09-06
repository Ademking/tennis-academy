import { Component, Input } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-navbar',
  animations: [
    trigger('AnimationTrigger0', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(.95)' }),
        animate('100ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'scale(1)' }),
        animate('75ms ease-in', style({ opacity: 0, transform: 'scale(.95)' }))
      ])
    ])
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Input() userData: any


  isMenu = false;

  constructor(private authService: AuthService) { }

  toggleMenu() {
    this.isMenu = !this.isMenu;
  }

  logout() {
    this.authService.logout();
  }
}
