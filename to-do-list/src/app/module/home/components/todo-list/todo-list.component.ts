import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');
  
  constructor() { }
  
  ngDoCheck(): void {
    this.setLocalStorage()
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

  public setLocalStorage(): void {
    if(this.taskList.length){
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }
}
