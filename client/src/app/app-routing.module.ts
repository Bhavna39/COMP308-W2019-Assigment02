import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent, data: {title: 'Home'}},
  {path: 'about', component: AboutComponent, data: {title: 'About'}},
  {path: 'projects', component: ProjectsComponent, data: {title: 'Projects'}},
  {path: 'services', component: ServicesComponent, data: {title: 'Servicess'}},
  {path: 'contact', component: ContactComponent, data: {title: 'Contact'}},
  {path: 'contact/contact-list', component: ContactListComponent, data: {title: 'Contact List'}},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
