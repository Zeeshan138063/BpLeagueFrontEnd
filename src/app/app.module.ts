import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {
  ErrorStateMatcher,
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatOptionModule,
  MatRadioModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatDividerModule,
  MatToolbarModule,
  ShowOnDirtyErrorStateMatcher,
  MatTabsModule,
  MatDialogModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RefreeComponent } from './refree/refree.component';
import {AppRoutingModule} from './app.routing';
//import { LeagueOwnerComponent } from './league-owner/league-owner.component';
import { SportsWriterComponent } from './sports-writer/sports-writer.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { Header1Component } from './header1/header1.component';
import { ForgetComponent } from './forget/forget.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { OwnerNavbarComponent } from './owner-navbar/owner-navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OwnerProfileComponent } from './owner-profile/owner-profile.component';
import { LeagueComponent } from './owner-league/league.component';
import { MatchComponent } from './owner-match/match.component';
import { TournamentComponent } from './tournament/tournament.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RequestedOwnerComponent } from './requested-owner/requested-owner.component';
import { RequestedRefreeComponent } from './requested-refree/requested-refree.component';
import { RequestedAnalyistComponent } from './requested-analyist/requested-analyist.component';
import { RequestedWriterComponent } from './requested-writer/requested-writer.component';
import { RegisteredWriterComponent } from './registered-writer/registered-writer.component';
import { RegisteredAnalyistComponent } from './registered-analyist/registered-analyist.component';
import { RegisteredRefreeComponent } from './registered-refree/registered-refree.component';
import { RegisteredOwnerComponent } from './registered-owner/registered-owner.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    RefreeComponent,
    // LeagueOwnerComponent,
    SportsWriterComponent,
    AboutComponent,
    LoginComponent,
    Header1Component,
    ForgetComponent,
    AdminNavbarComponent,
    OwnerNavbarComponent,
    PageNotFoundComponent,
    OwnerProfileComponent,
    LeagueComponent,
    MatchComponent,
    TournamentComponent,
    BlogComponent,
    ContactComponent,
    HomeComponent,
    AdminComponent,
    AdminDashboardComponent,
    RequestedOwnerComponent,
    RequestedRefreeComponent,
    RequestedAnalyistComponent,
    RequestedWriterComponent,
    RegisteredWriterComponent,
    RegisteredAnalyistComponent,
    RegisteredRefreeComponent,
    RegisteredOwnerComponent
  ],
  imports: [
    Ng2SmartTableModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatDividerModule,
    MatOptionModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatTabsModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
