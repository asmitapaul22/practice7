import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice7';
  display=false
  books=[
    {name:'app.net',price:'25'},
    {name:'app.net',price:'25'},
    {name:'app.net',price:'25'},
    {name:'app.net',price:'25'},
  ];
}
