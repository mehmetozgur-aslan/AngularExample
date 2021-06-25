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

  cities = [
    { id: 1, name: "İstanbul", region: "Marmara" },
    { id: 3, name: "Ankara", region: "İç Anadolu" },
    { id: 6, name: "İzmir", region: "Ege" },
    { id: 9, name: "Manisa", region: "Ege" },
    { id: 12, name: "Kars", region: "Doğu Anadolu" },
  ]

  color = "";

  constructor() { }

  ngOnInit() {
  }

  changeTitle() {
    this.title = !this.title;
  }

}
