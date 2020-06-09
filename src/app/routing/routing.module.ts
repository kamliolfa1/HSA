import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { ListtopicsComponent } from '../listtopics/listtopics.component';
import { BotsComponent } from '../bots/bots.component';
import { PeopleComponent } from '../people/people.component';
import { CommunitiesComponent } from '../communities/communities.component';
import { DetailTopicComponent } from '../detail-topic/detail-topic.component';
import { ListbotsComponent } from '../listbots/listbots.component';

const routes: Routes = [
  { path: "Topics", component: ListtopicsComponent },
  { path: "Bots", component: ListbotsComponent },
  { path: "Communities", component: CommunitiesComponent },
  { path: "People", component: PeopleComponent },
  { path: "topic/:id", component: DetailTopicComponent },
  { path: "bot/:id", component: BotsComponent }

];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
