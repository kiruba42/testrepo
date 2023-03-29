import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-interactivemode',
  templateUrl: './interactivemode.component.html',
  styleUrls: ['./interactivemode.component.css']
})
export class InteractivemodeComponent implements OnInit {  
  formValue!: FormGroup;
constructor(private formbuilder: FormBuilder){}
  ngOnInit(): void {
  this.formValue=this.formbuilder.group({
    'option':['',Validators.compose([Validators.required])],
    'file':['',Validators.compose([Validators.required])],
  })
  }

  submit(){
    console.log(this.formValue.value.option)
  }
}
