import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  user = {
    name: "Özgür",
    surname: "Aslan",
    job: "Software Developer",
    favorite_place: "Kız Kulesi",
    favorite_place_image: "",
    isEditable: true
  };

  type = "text";

  constructor() { }

  ngOnInit() {
  }

  changeEditable() {
    this.user.isEditable = !this.user.isEditable;
  }

  buttonClicked(){
    alert("clicked");
  }

  inputSubmit(value:any){
    alert(value.target.value + " geldi...");
  }

}
