import { Component, OnInit } from '@angular/core';

import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit  {
  title = 'Garabatos';
  mybool: boolean;

  constructor(private router: Router, ) {
    console.log(this.router.url);
  }

  ngOnInit() {

      if (this.router.url === '/') {
        this.mybool = false;
      }

  }

}
