import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,AppFooterComponent,AppNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  ngOnInit(): void {
    initFlowbite();
  }
}
