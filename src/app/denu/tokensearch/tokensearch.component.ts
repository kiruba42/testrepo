import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
interface tokensearch{
physicaltoken:string;
logicaltoken:string;
priority:string;
status:string;
}
@Component({
  selector: 'app-tokensearch',
  templateUrl: './tokensearch.component.html',
  styleUrls: ['./tokensearch.component.css']
})
export class TokensearchComponent implements OnInit {
  formValue!: FormGroup;
  tabledata:tokensearch[]=[];
  loading:boolean=false;
  constructor(private formbuilder: FormBuilder) {
  }
  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      'search':['',Validators.compose([Validators.required])],
      'token':['',Validators.compose([Validators.required])]
    });
    this.tabledata=[
      {physicaltoken:"AAP",logicaltoken:"AGENT ASPIRANT PROGRAM",priority:"PRIMARY",status:"Active"},
      {physicaltoken:"AAPD",logicaltoken:"ADDITIONAL ANNUITY PURCHASE DATE",priority:"",status:"Active"},
  ]
  }
  loadCustomers(event: any){
  }
  searchdata(event: any){
    console.log(event)
    
  }
  submit(){
    console.log(this.formValue.value.token)
  }
  

}
