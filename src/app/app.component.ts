import { Component } from '@angular/core';
import * as $ from 'node_modules/jquery/dist/jquery.js';
import { slideInAnimation } from './animation';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'Ma Ferme';

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  clickEvent(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  }

  ngOnInit(){
  }
}
