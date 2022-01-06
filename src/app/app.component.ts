import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  elementType : 'url' | 'canvas' | 'img' = 'url';
value : string = 'facebook.com';
}
