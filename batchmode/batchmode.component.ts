import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AliasList } from '../constdata/aliaslist';
import * as XLSX from 'xlsx';
import { Batchpostclass } from 'src/app/classfiles/batchpostclass';
import { DenuallserviceService } from '../allservice/denuallservice.service';
import * as fs from 'file-saver';
import * as FileSaver from 'file-saver';
import { Batchoutput } from 'src/app/classfiles/batchoutput';

interface AliasList {
  label: string;
  value: number;
}
interface type {
  name: string,
  code: number
}

@Component({
  selector: 'app-batchmode',
  templateUrl: './batchmode.component.html',
  styleUrls: ['./batchmode.component.css']
})
export class BatchmodeComponent implements OnInit {
  formValue!: FormGroup;
  alphabet: any = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  sourceAlias!: AliasList[];
  targetAlias!: AliasList[];
  sheetnames: type[] = [];
  columnnames: type[] = [];
  selectedSheet!: type;
  selectedColumn!: type;
  data: any = [];
  result: Batchoutput[] = [];
  postdata: Batchpostclass = new Batchpostclass();

  wb!: XLSX.WorkBook;
  ws!: XLSX.WorkSheet;
  constructor(private api: DenuallserviceService) {
    this.sourceAlias = AliasList;
    this.targetAlias = [];

  }
  ngOnInit(): void {

  }
  onUpload(event: any) {
    console.log(event)
    const target: DataTransfer = <DataTransfer>(event.target);
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      this.wb = XLSX.read(bstr, { type: 'binary' });
      //availabe sheet
      for (let i = 0; i < this.wb.SheetNames.length; i++) {
        this.sheetnames.push({ name: this.wb.SheetNames[i].toString(), code: i });
      }
      /* grab first sheet */
      // const wsname: string = this.wb.SheetNames[0];
      // const ws: XLSX.WorkSheet = this.wb.Sheets[wsname];
      /* save data */
      // this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));
      // console.log(this.data.length);
      // console.log(this.data[0].length)
      // for(let j=0;j<this.data[0].length;j++){
      //   this.columnnames.push({name:this.alphabet[j],code:j})
      // }
      //  var cell = ws[XLSX.utils.encode_cell({ c: 1, r: 0 })] /* find the cell in the first row */
      // console.log(cell);
    };
    reader.readAsBinaryString(target.files[0]);
  }
  selectsheet() {
    this.data = [];
    this.columnnames.length = 0;
    this.ws = this.wb.Sheets[this.selectedSheet.name];
    this.data = (XLSX.utils.sheet_to_json(this.ws, { header: 1 }));
    if (this.data[0] != null) {
      for (let j = 0; j < this.data[0].length; j++) {
        this.columnnames.push({ name: this.alphabet[j], code: j })
      }
    }
  }
  submit() {
    this.postdata = new Batchpostclass();
    for (let i = 0; i < this.data.length; i++) {
      let cell = this.data[i][this.selectedColumn.code];
      if (cell != null)
        this.postdata.keywords.push(cell);
    }
    for (let i = 0; i < this.targetAlias.length; i++) {
      this.postdata.aliaslist.push(this.targetAlias[i].value);
    }
    this.api.postbatch(this.postdata).subscribe((res: any) => {
      console.log(res)
      for(let i=0;i<res.length;i++){
      Object.keys(res[i]).forEach(key => {
        if(res[i][key]===null){
          delete res[i][key];
        }
      })
    }
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(res);
      const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.exportdata(excelBuffer, "excelFileName");
    })
  }
  exportdata(buffer: any, fileName: string) {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  reset() {
    this.formValue.reset();
  }
}
