import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MdButtonModule, MdInputModule, MdSlideToggleModule,MdProgressSpinnerModule} from '@angular/material';
import { AppComponent } from './app.component';
import { GradesComponent } from './grades/grades.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { NavigationService } from './navigation.service';
import { LibrusDataService } from './librus-data.service';
import {
  RouterModule,  
  Routes,
} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'grades', component: GradesComponent, canActivate: [AuthGuard] }
];


@NgModule({
  declarations: [
    AppComponent,
    GradesComponent,
    SidebarComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule, MdInputModule, MdSlideToggleModule,MdProgressSpinnerModule,
    RouterModule.forRoot(routes)
  ],
  providers: [NavigationService, LibrusDataService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
