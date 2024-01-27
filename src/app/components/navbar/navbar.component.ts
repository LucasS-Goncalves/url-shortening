import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  hamburgerMenuOpened = false;

  menuToggle(){
    this.hamburgerMenuOpened = !this.hamburgerMenuOpened;
  }
}
