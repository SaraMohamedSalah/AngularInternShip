import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [MainComponent, ItemComponent, ListComponent],
  imports: [
    CommonModule
  ]
})
export class ContentModule { }
