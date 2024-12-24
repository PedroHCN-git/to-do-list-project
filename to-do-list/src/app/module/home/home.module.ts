import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ToDoButtonDeleteAllComponent } from './components/to-do-button-delete-all/to-do-button-delete-all.component';
import { TodoInputAddItemsComponent } from './components/todo-input-add-items/todo-input-add-items.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ToDoButtonDeleteAllComponent,
    TodoInputAddItemsComponent,
    TodoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
  ],
})
export class HomeModule { }
