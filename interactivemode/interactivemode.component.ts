import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AliasList } from '../constdata/aliaslist';

@Component({
  selector: 'app-interactivemode',
  templateUrl: './interactivemode.component.html',
  styleUrls: ['./interactivemode.component.css']
})
export class InteractivemodeComponent implements OnInit {  
  formValue!: FormGroup;
  alias:any[]=AliasList;
constructor(private formbuilder: FormBuilder){}
  ngOnInit(): void {
  this.formValue=this.formbuilder.group({
    'convertaliastype':['',Validators.compose([Validators.required])],
    'keyword':['',Validators.compose([Validators.required])],
  })
  }
  searchdata(event:any){

  }
  submit(){
    console.log(this.formValue.value.option)
  }
}
