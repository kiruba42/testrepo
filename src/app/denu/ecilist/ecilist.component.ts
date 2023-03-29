import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as FileSaver from 'file-saver';
import { LazyLoadEvent } from 'primeng/api';
interface data {
  eciname: string,
  physicalname: string
}

@Component({
  selector: 'app-ecilist',
  templateUrl: './ecilist.component.html',
  styleUrls: ['./ecilist.component.css']
})
export class EcilistComponent implements OnInit {
  formValue!: FormGroup;
  tabledata: data[] = [];
  loading: boolean = true;
  constructor(private formbuilder: FormBuilder) {
  }
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      'keyword': ['', Validators.compose([Validators.required])]
    });
    this.tabledata = [
      { eciname: "Agreement Index Identifer", physicalname: "agre_index_id" },
      { eciname: "Associate Identifer", physicalname: "associate_id" },
    ]
  }
  searchdata(event: any) {
    console.log(event)

  }
  submit() {
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
    const data: Blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + ".xlsx");
  }
}
