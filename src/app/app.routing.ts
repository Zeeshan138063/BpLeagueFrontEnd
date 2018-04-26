import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignUpComponent} from './sign-up/sign-up.component';
import {RefreeComponent} from './refree/refree.component';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {SportsWriterComponent} from './sports-writer/sports-writer.component';
//import {LeagueOwnerComponent} from './league-owner/league-owner.component';
import {LoginComponent} from './login/login.component';
import {Header1Component} from './header1/header1.component';
import {ForgetComponent} from './forget/forget.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {OwnerProfileComponent} from './owner-profile/owner-profile.component';
import {LeagueComponent} from './owner-league/league.component';
import {MatchComponent} from './owner-match/match.component';
import {TournamentComponent} from './tournament/tournament.component';
import {ContactComponent} from './contact/contact.component';
import {BlogComponent} from './blog/blog.component';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {RegisteredRefreeComponent} from './registered-refree/registered-refree.component';
import {RegisteredWriterComponent} from './registered-writer/registered-writer.component';
import {RegisteredAnalyistComponent} from './registered-analyist/registered-analyist.component';
import {RegisteredOwnerComponent} from './registered-owner/registered-owner.component';
import {RequestedRefreeComponent} from './requested-refree/requested-refree.component';
import {RequestedWriterComponent} from './requested-writer/requested-writer.component';
import {RequestedAnalyistComponent} from './requested-analyist/requested-analyist.component';
import {RequestedOwnerComponent} from './requested-owner/requested-owner.component';


const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'league_owner', component:LeagueComponent},
  {path: 'register', component: SignUpComponent},
  {path: 'refree', component: RefreeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'sport_writer', component: SportsWriterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forget', component: ForgetComponent},
  {path: 'profile', component: OwnerProfileComponent},
  {path: 'leagues', component: LeagueComponent},
  {path: 'matches', component: MatchComponent},
  {path: 'tournaments', component: TournamentComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'registered-refree', component: RegisteredRefreeComponent},
  {path: 'registered-writer', component: RegisteredWriterComponent},
  {path: 'registered-analyist', component: RegisteredAnalyistComponent},
  {path: 'registered-owner', component: RegisteredOwnerComponent},

  {path: 'requested-refree', component: RequestedRefreeComponent},
  {path: 'requested-writer', component: RequestedWriterComponent},
  {path: 'requested-analyist', component: RequestedAnalyistComponent},
  {path: 'requested-owner', component: RequestedOwnerComponent},



  {path: 'dashboard', component: AdminDashboardComponent},
  { path: '**', component: PageNotFoundComponent }
  // {path:'home' , component:HomeComponent},
  // {
  //   path: 'register',
  //   component: SignUpComponent,
  //   //   children:[
  //   //     { path:'', loadChildren: '.'},
  //   //     { path:'', loadChildren: '.'},
  //   //     { path:'', loadChildren: '.'},
  //   //     { path:'', loadChildren: '.'},
  //   //     { path:'', loadChildren: '.'},
  //   //     { path:'', loadChildren: '.'},
  //   //     ]
  //   // },,
  // },
  //
  // // leagur owner page routes
  //

  // // The wildcard route comes last because it matches every URL and should be selected only if no other routes are matched first.


];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {enableTracing: true}// <-- debugging purposes only
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
