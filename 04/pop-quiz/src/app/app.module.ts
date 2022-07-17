import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { QuestionPresenterComponent } from './components/question-presenter/question-presenter.component';
import { ExamSummaryComponent } from './components/exam-summary/exam-summary.component';
import { ScorePresenterComponent } from './components/score-presenter/score-presenter.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    QuestionPresenterComponent,
    ExamSummaryComponent,
    ScorePresenterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
