import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
interface AliasList{
  label:string;
  value:number;
}
@Component({
  selector: 'app-batchmode',
  templateUrl: './batchmode.component.html',
  styleUrls: ['./batchmode.component.css']
})
export class BatchmodeComponent implements OnInit{
  formValue!: FormGroup;

  sourceAlias!: AliasList[];
  targetAlias!: AliasList[];
  sheet!:any;
    constructor(private formbuilder: FormBuilder){
      this.sourceAlias=[{label:'Use Case Name',value:1},{label:'Physical Data Model Name(30 Chars)',value:2},
      {label:'Physical Data Model Name(256 Chars)',value:3},{label:'COBOL Name(30 Chars)',value:4},
      {label:'Product System Name(30 Chars)',value:5},{label:'Product Short Name(30 Chars)',value:6},
      {label:'Object Model Name',value:7},{label:'Object Language(30 Chars-Java etc..)',value:8},
      {label:'XML DTD Name',value:9},{label:'XML Long Name',value:10},{label:'Logical Name',value:11},
      {label:'Pascal Case',value:12},{label:'Pascal Case Abbreviated',value:13},{label:'Title Case',value:14}]
      this.targetAlias = [];

    }
  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      'searchtype':['logical',Validators.compose([Validators.required])],
      'sheet':['',Validators.compose([Validators.required])],
      'token':['',Validators.compose([Validators.required])]
    });  }
    onUpload(event: any){
      
    }
    submit(){

    }
    reset(){
      this.formValue.reset();
    }
}
