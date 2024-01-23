import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import {HttpClientModule} from "@angular/common/http";
import { MatchdayEditorComponent } from './components/matchday-editor/matchday-editor.component';
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './features/home/home.component';
import { SwitchButtonComponent } from './components/switch-button/switch-button.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LeaderboardComponent,
    MatchdayEditorComponent,
    HomeComponent,
    SwitchButtonComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
