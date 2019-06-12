import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-g-navigation',
  templateUrl: './g-navigation.component.html',
  styleUrls: ['./g-navigation.component.css']
})
export class GNavigationComponent implements OnInit {

  constructor(private router: Router) {
   }
   isActiveUrl(condition): boolean {
    return  this.router.url==="/"+condition;
  }

  ngOnInit() {
  }

}
