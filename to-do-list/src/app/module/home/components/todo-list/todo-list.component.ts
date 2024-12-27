import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  
  public taskList: Array<TaskList> = [
    {task: "My task", checked: false}
  ];
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  public deleteItemTaskList(index: number):void {
    this.taskList.splice(index, 1);
  }

  public deleteAll():void {
    const confirm = window.confirm("Você realmente deseja deletar todos os items?");
    this.taskList = [];
  }
}
