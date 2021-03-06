import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { SharedModule } from  './shared/shared.module';
import { RoutingModule } from  './routing/routing.module';
import { MyQuestionsModule } from  './myQuestions/my-questions.module';

import { AppComponent, DashboardComponent } from './components';

@NgModule({
  declarations: [
    AppComponent, DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    //rwa modules
    CoreModule,
    SharedModule,
    RoutingModule,
    MyQuestionsModule
  ],
  providers: [ 
  ],                                                                      
  bootstrap: [AppComponent]
})
export class AppModule { }
