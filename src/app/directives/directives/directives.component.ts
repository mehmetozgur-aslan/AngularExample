import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  title = false;
  name = "";
  username = "";

  constructor() { }

  ngOnInit() {
  }

  changeTitle() {
    this.title = !this.title;
  }

}
