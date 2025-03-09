import { Component, OnInit } from "@angular/core";
import { Page } from "@nativescript/core";

@Component({
  selector: "Home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  constructor(private _page: Page) {
    this._page.actionBarHidden = true;
  }

  ngOnInit(): void {}
}
