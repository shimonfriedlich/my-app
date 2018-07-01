import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  myObj = {
    name:'avia',
    anchor:'https://nrg.co.il'
  }
  clicked() {
    console.log('hi');
  }
   
}

