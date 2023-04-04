import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interactive',
  templateUrl: './interactive.component.html',
  styleUrls: ['./interactive.component.css']
})
export class InteractiveComponent implements OnInit {
 
  searchTerm: any;
  selected: any; 
  finalText: any;
  finalTextCode: any;

  constructor() { }

  ngOnInit(): void {
  }

  convertText(){
    this.finalText = undefined
    if(this.searchTerm != undefined && this.searchTerm != null && this.searchTerm != ''){
      if(this.selected && this.selected != undefined && this.selected != null && this.selected != ''){
      this.finalTextCode = this.selected;
      this.finalText = this.searchTerm;   
      }
      else{
        alert("Please Enter Data Get Equvalent")
      }
    }
    else{
      alert("Please Enter Data Element Name")
    }

  }

}
