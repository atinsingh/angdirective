import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = [
    {
      name: 'John Doe',
      phone: '6476117221',
      amount: 28.91,
      date  :  new Date()
    },
    {
      name: 'Jean Doe',
      phone: '6476117222',
      amount: 38.91,
      date  : new Date()
    }
  ]
  title = 'sample4';
}
