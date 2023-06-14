import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Illegalwords } from '../classfiles/illegalwords';
import { DenuadminserviceService } from '../service/denuadminservice.service';
import { Tokentext } from '../classfiles/tokentext';
interface Priority {
  code: number;
  name: string;
}
@Component({
  selector: 'app-tokentext',
  templateUrl: './tokentext.component.html',
  styleUrls: ['./tokentext.component.css']
})
export class TokentextComponent implements OnInit {
  formValue!: FormGroup;
  tokenwords: Tokentext[] = [];
  selectedwords: Tokentext[] = [];
  showsDialog: boolean = false;
  priorityoption!: Priority[];
  editoken: boolean = false;
  savetokenwords: Tokentext = new Tokentext();
  constructor(private formbuilder: FormBuilder, private api: DenuadminserviceService,
    private messageService: MessageService, private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.priorityoption = [
      { code: 0, name: "" },
      { code: 1, name: "Primary" },
      { code: 2, name: "Secondary" }
    ];
    this.formValue = this.formbuilder.group
      ({
        'logicalname': ['', Validators.compose([Validators.required])],
        'physicalname': ['', Validators.compose([Validators.required])],
        'priority': ['0', Validators.compose([Validators.required])],
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
  getPriority(id: number) {
    if (id == 1)
      return "Primary";
    else if (id == 2)
      return "Secondary";
    else
      return ""
  }
  getAllData() {
    this.api.getalltokenwords().subscribe((res: any) => {
      this.tokenwords = res;
    })
  }
  openNew() {
    this.editoken = false;
    this.showsDialog = true;
  }
  deleteSelectedTokenWord() {
    console.log(this.selectedwords);
  }
  editTokenWord(tokenword: Tokentext) {
    this.savetokenwords = new Tokentext();
    this.savetokenwords = tokenword;
    this.formValue.controls['logicalname'].setValue(tokenword.tokentxtlogical);
    this.formValue.controls['physicalname'].setValue(tokenword.tokentxtphysical);
    let priorityvalue;
    this.priorityoption.filter((res:any)=>{
      if(res.code==tokenword.tokenpriorityid){
        priorityvalue=res;
      }
    });
    this.formValue.controls['priority'].setValue(priorityvalue);
    this.formValue.controls['status'].setValue(tokenword.tokenactive);
    this.editoken = true;
    this.showsDialog = true;
  }
  deleteTokenWord(illegalword: Tokentext) {
  }
  hideDialog() {
    this.showsDialog = false;
  }
  saveEditTokenWords() {
    this.savetokenwords.tokentxtlogical = this.formValue.value.logicalname;
    this.savetokenwords.tokentxtphysical = this.formValue.value.physicalname;
    this.savetokenwords.tokenpriorityid = this.formValue.value.priority.code;
    this.savetokenwords.tokenactive = this.formValue.value.status;
    this.savetokenwords.tokenmodifieddate = new Date();
    this.api.updatetokenwords(this.savetokenwords).subscribe((res:any)=>{
      this.formValue.reset();
      this.showsDialog = false;
      this.editoken=false;
      this.getAllData();
    })
  }
  createTokenWords() {
    this.savetokenwords.tokentxtlogical = this.formValue.value.logicalname;
    this.savetokenwords.tokentxtphysical = this.formValue.value.physicalname;
    this.savetokenwords.tokenpriorityid = this.formValue.value.priority.code;
    this.savetokenwords.tokenactive = this.formValue.value.status;
    this.savetokenwords.tokencreateddate = new Date();
    this.api.posttokenwords(this.savetokenwords).subscribe((res: any) => {
      this.showsDialog = false;
      this.formValue.reset();
      this.getAllData();
    })
  }
}