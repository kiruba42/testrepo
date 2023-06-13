import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { DenuadminserviceService } from '../service/denuadminservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Illegalwords } from '../classfiles/illegalwords';

@Component({
  selector: 'app-illegalwords',
  templateUrl: './illegalwords.component.html',
  styleUrls: ['./illegalwords.component.css']
})
export class IllegalwordsComponent implements OnInit {
  formValue!: FormGroup;
  illegalwords: Illegalwords[] = [];
  selectedwords: Illegalwords[] = [];
  productDialog: boolean = false;
  ediproduct:boolean=false;
  saveillegalwords: Illegalwords = new Illegalwords();
  constructor(private formbuilder: FormBuilder, private api: DenuadminserviceService,
    private messageService: MessageService, private confirmationService: ConfirmationService) {

  }
  ngOnInit(): void {
    this.formValue = this.formbuilder.group
      ({
        'illegalword': ['', Validators.compose([Validators.required])],
        'status': [true],
      });
      this.getAllData();
  }
  getStatus(status: boolean) {
    if (status == true)
      return 'success';
    else
      return 'danger';
  }
  getAllData() {
    this.api.getallillegalwords().subscribe((res: any) => {
      this.illegalwords = res;
    })
  }
  openNew() {
    this.ediproduct=false;
    this.productDialog = true;
  }
  deleteSelectedIllegalWord() {
    console.log(this.selectedwords);
  }
  editIllegalWord(illegalword: Illegalwords) {
    this.saveillegalwords=new Illegalwords();
    this.saveillegalwords=illegalword;
    this.formValue.controls['illegalword'].setValue(illegalword.words);
    this.formValue.controls['status'].setValue(illegalword.isactive);
    this.ediproduct=true;
    this.productDialog=true;
  }
  deleteIllegalWord(illegalword: Illegalwords) {

   }
  hideDialog() {
    this.productDialog = false;
  }
  saveEditIllegalWords(){
    this.saveillegalwords.words=this.formValue.value.illegalword;
    this.saveillegalwords.isactive=this.formValue.value.status;
    this.saveillegalwords.modifieddate=new Date();
    this.api.updateillegalwords(this.saveillegalwords).subscribe((res:any)=>{
      this.formValue.reset();
      this.productDialog = false;
      this.ediproduct=false;
      this.getAllData();
    })
  }
  createIllegalWords() {
    this.saveillegalwords.words = this.formValue.value.illegalword;
    this.saveillegalwords.isactive = this.formValue.value.status;
    this.saveillegalwords.createdate=new Date();
    this.api.postillegalwords(this.saveillegalwords).subscribe((res: any) => {
      this.productDialog = false;
      this.formValue.reset();
      this.getAllData();
    })
  }
}
