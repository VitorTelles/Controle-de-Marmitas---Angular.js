import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { PackageListComponent } from './packages/package-list/package-list.component';
import { PackageDetailsComponent } from './packages/package-details/package-details.component';
import { FoodEditComponent } from './food-list/food-edit/food-edit.component';
import { FoodListComponent } from './food-list/food-list.component';
import { PackagesComponent } from './packages/packages.component';
import { PackageItemComponent } from './packages/package-list/package-item/package-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PackageListComponent,
    PackageDetailsComponent,
    PackagesComponent,
    PackageItemComponent,
    FoodEditComponent,
    FoodListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
