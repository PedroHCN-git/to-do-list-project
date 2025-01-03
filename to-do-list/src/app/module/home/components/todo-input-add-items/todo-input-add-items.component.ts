import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-items',
  templateUrl: './todo-input-add-items.component.html',
  styleUrls: ['./todo-input-add-items.component.scss']
})
export class TodoInputAddItemsComponent implements OnInit {

  constructor() { }

  @Output()
  public emiter = new EventEmitter()

  public addItemTaskList: string = "";

  ngOnInit(): void {
  }

  public submitItemTaskList(): void {
    this.addItemTaskList = this.addItemTaskList.trim();

    if(this.addItemTaskList){
      this.emiter.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    }
  }

}
