import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { track } from '@vercel/analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showSidebar: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Set initial sidebar state
    this.showSidebar = !this.router.url.includes('/login') && localStorage.getItem('isLoggedIn') === 'true';

    // Subscribe to route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.showSidebar = !event.url.includes('/login') && localStorage.getItem('isLoggedIn') === 'true';
      // Track page views
      track('page_view', { url: event.url });
    });
  }
}
