import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { PopupAlertComponent } from './popup-alert/popup-alert.component';
import { FormsModule } from '@angular/forms';
import { PopupEditComponent } from './popup-edit/popup-edit.component';
import { ToDoListHeaderComponent } from './to-do-list-header/to-do-list-header.component';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';
import { SearchPipe } from './search.pipe';
import { FilterSearchPipe } from './filter-search.pipe';
import { DataService } from './data.service';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    PopupAlertComponent,
    PopupEditComponent,
    ToDoListHeaderComponent,
    ViewTasksComponent,
    SearchPipe,
    FilterSearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
