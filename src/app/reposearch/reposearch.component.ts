import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LazyLoadEvent } from 'primeng/api';
import * as FileSaver from 'file-saver';  
import * as XLSX from 'xlsx'; 
import { Data } from '../classfiles/data';
interface type {
  name: string,
  code: number
}
@Component({
  selector: 'app-reposearch',
  templateUrl: './reposearch.component.html',
  styleUrls: ['./reposearch.component.css']
})
export class ReposearchComponent implements OnInit {
  formValue!: FormGroup;
  searchtype!: type[];
  servername!: type[];
  tabledata: Data[]=[];
  exdata:Data=new Data();
  //lazy loading
  loading!: boolean;
  constructor(private formbuilder: FormBuilder) {
    this.exdata.columnname="c"
    this.exdata.databasename="sd"
    this.exdata.description="de"
    this.exdata.tablename="sd";
    this.tabledata.push(this.exdata);
    }
  ngOnInit(): void {
    this.searchtype = [
      { name: "Attribute", code: 1 },
      { name: "Author", code: 2 },
      { name: "Column", code: 3 },
      { name: "DM1 File", code: 4 },
      { name: "Entity", code: 5 },
      { name: "Folder", code: 6 },
      { name: "Table", code: 7 },
      { name: "Platform/DBMS", code: 8 },
    ];
    this.servername = [
      { name: "Server1", code: 1 },
      { name: "Server2", code: 2 }
    ];
    this.formValue = this.formbuilder.group
      ({
        'searchtype': ['', Validators.compose([Validators.required])],
        'searchword': ['', Validators.compose([Validators.required])],
        'servername': ['', Validators.compose([Validators.required])],
      });
  }
  submitdata() {
    this.loading = true;
  }
  loadCustomers(event: LazyLoadEvent) {
    setTimeout(() => {
      if (this.tabledata) {
        this.loading = false;
      }
    }, 1000);
  }
  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.tabledata);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array"
      });
      this.saveAsExcelFile(excelBuffer, "products");
    });
  }
  private saveAsExcelFile(buffer: any, fileName: string): void {  
    const data: Blob = new Blob([buffer], {type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'});  
    FileSaver.saveAs(data, fileName + '_export_' + new  Date().getTime() + ".xlsx");  
 }
}
