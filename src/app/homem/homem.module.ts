import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { BannerComponent } from '../home/banner/banner.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [HomeComponent, BannerComponent ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [HomeComponent, BannerComponent]
})
export class HomemModule { }
