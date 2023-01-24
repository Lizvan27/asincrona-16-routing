import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PeruComponent } from './peru/peru.component';
import { ChileComponent } from './chile/chile.component';
import { UruguayComponent } from './uruguay/uruguay.component';
import { ComponentsModule } from '../components/components.module';
import { HeaderComponent } from '../components/header/header.component';



@NgModule({
  declarations: [
    HomeComponent,
    PeruComponent,
    ChileComponent,
    UruguayComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    HomeComponent,
    PeruComponent,
    ChileComponent,
    UruguayComponent
  ]
})
export class PagesModule { }
