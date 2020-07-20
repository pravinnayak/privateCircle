import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'private-circle';
  currentUrl: String;
  search: String;
  constructor(private router: Router) {
    // this.search = 'search';
    this.router.events.subscribe((event: NavigationEnd) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        console.log('NavigationEnd:', event);
      }
      // this.currentUrl = e.url;
    });
  }
  // onSearchChange(): void {
  //   // console.log(this.search);
  // }

  ngOnInit() {}
}
