import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop'


@Component({
  selector: 'app-batchmode',
  templateUrl: './batchmode.component.html',
  styleUrls: ['./batchmode.component.css']
})
export class BatchmodeComponent {
  searchTerm: any;
  file = [
    {id:'1', value: 'convertfile'},
    {id:'2', value: 'createfile'}
  ]
  sheets:any;
  selectedsheet:any;
  Column:any;
  selectedcolumn:any;
  files:any;
  selectedfile:any;

  
  
todo =[
  'Use Case Name',
  'Object Model Name',
  'Logical Name'
];

done = [
  'Pascal Case',
  'Pascal Case Abbreviated',
  'Title Case'
]

//event
drop(event: CdkDragDrop<string[]>){
  if(event.previousContainer === event.container){
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }else{
    transferArrayItem(event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex);
  }
}

}
