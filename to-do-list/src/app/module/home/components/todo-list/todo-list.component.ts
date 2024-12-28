import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  
  public taskList: Array<TaskList> = [
    {task: "My task", checked: false}
  ];
  
  constructor() { }
  
  ngDoCheck(): void {
    this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
  }
  
  public deleteItemTaskList(index: number):void {
    this.taskList.splice(index, 1);
  }

  public deleteAll():void {
    const confirm = window.confirm("Você realmente deseja deletar todos os items?");
    this.taskList = [];
  }

  public addItem(item: string): void {
    this.taskList.push({task: item, checked: false});
  }

  public validationInput(event: String, index: number): void {
    if(!event.length){
      const confirm = window.confirm("sua task está vazia, deseja apaga-la?")

      if(confirm){
        this.deleteItemTaskList(index);
      }
    }
  }
}
