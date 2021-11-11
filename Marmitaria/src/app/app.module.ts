import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';

import { AppComponent } from './app.component';

import { PackagesComponent } from './packages/packages.component';
import { PackageListComponent } from './packages/package-list/package-list.component';
import { PackageDetailsComponent } from './packages/package-details/package-details.component';
import { PackageItemComponent } from './package/package-list/package-item/package-item.component';
import { PackageLunchComponent } from './package-lunch/package-lunch.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodEditComponent } from './food-list/food-edit/food-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PackagesComponent,
    PackageListComponent,
    PackageDetailsComponent,
    PackageItemComponent,
    PackageLunchComponent,
    FoodListComponent,
    FoodEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
