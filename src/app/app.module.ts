import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { CommunitiesComponent} from './communities/communities.component';
import { AppComponent } from './app.component';
import { ListbotsComponent } from './listbots/listbots.component';
import { ListtopicsComponent } from './listtopics/listtopics.component';
import { BotsComponent } from './bots/bots.component';
import { routingModule } from "./routing/routing.module";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { SlidebarComponent} from './slidebar/slidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailTopicComponent } from './detail-topic/detail-topic.component';
import { DialogTopicComponent } from './dialog-topic/dialog-topic.component';
import { DialogbotComponent } from './dialogbot/dialogbot.component';
import { DetailbotComponent } from './detailbot/detailbot.component';
@NgModule({
  declarations: [
    SlidebarComponent,
    AppComponent,
    ListbotsComponent,
    ListtopicsComponent,
    BotsComponent,
    DetailTopicComponent,
    DialogTopicComponent,
    DialogbotComponent,
    DetailbotComponent,
    CommunitiesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatDialogModule,
    routingModule,
    MatIconModule,
    MatToolbarModule,
  ],
  providers: [],
  entryComponents: [DialogTopicComponent,DialogbotComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
