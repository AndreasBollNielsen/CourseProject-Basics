import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loadedComponent = 'recipe';
  
  onNavigate(navData: string) {
    this.loadedComponent = navData;
  }
}
