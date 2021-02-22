import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mehdi-stuff';

  post = {
    isFav: true
  }

  onFavChanged(somedata: string){
    console.log('drfgdytey%$#' + somedata);
  }
}
