import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { OldloginComponent } from './oldlogin/oldlogin.component';
import { RouterModule } from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { InterviewQAComponent } from './interview-qa/interview-qa.component';
import { ProgrammingComponent } from './programming/programming.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { PythonComponent } from './python/python.component';
import { PyIntroComponent } from './py-intro/py-intro.component';
import { ProfileComponent } from './profile/profile.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PyLoopsComponent } from './py-loops/py-loops.component';
import { PyTopicsComponent } from './py-topics/py-topics.component';
import { CppComponent } from './cpp/cpp.component';
import { CppIntroComponent } from './cpp-intro/cpp-intro.component';
import { FunctionsComponent } from './functions/functions.component';
import { CppMoreComponent } from './cpp-more/cpp-more.component';
import { CComponent } from './c/c.component';
import { CIntroComponent } from './c-intro/c-intro.component';
import { CLoopsComponent } from './c-loops/c-loops.component';
import { CTopicsComponent } from './c-topics/c-topics.component';
import { McqComponent } from './mcq/mcq.component';
import { Mcq1Component } from './mcq1/mcq1.component';
import { LogicalreasoningComponent } from './logicalreasoning/logicalreasoning.component';
import { Lr1Component } from './lr1/lr1.component';
import { Lr2Component } from './lr2/lr2.component';
import { CodingComponent } from './coding/coding.component';
import { QuizComponent } from './quiz/quiz.component';
import { DiscussComponent } from './discuss/discuss.component';
import { ForgetPwdComponent } from './forget-pwd/forget-pwd.component';
import { ChangePwdComponent } from './change-pwd/change-pwd.component';
import { AddiDetailsComponent } from './addi-details/addi-details.component';
import { JavaComponent } from './java/java.component';
import { JavaIntroComponent } from './java-intro/java-intro.component';
import { JavaLoopsComponent } from './java-loops/java-loops.component';
import { HtmlComponent } from './html/html.component';
import { HtmlIntroComponent } from './html-intro/html-intro.component';
import { HtmlEleComponent } from './html-ele/html-ele.component';
import { HtmlMoreComponent } from './html-more/html-more.component';
import { ChangeBgDirective } from './change-bg.directive';
import { WelcomeQuizComponent } from './welcome-quiz/welcome-quiz.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    OldloginComponent,
    HomepageComponent,
    InterviewQAComponent,
    ProgrammingComponent,
    ShowUsersComponent,
    PythonComponent,
    PyIntroComponent,
    ProfileComponent,
    MainpageComponent,
    PyLoopsComponent,
    PyTopicsComponent,
    CppComponent,
    CppIntroComponent,
    FunctionsComponent,
    CppMoreComponent,
    CComponent,
    CIntroComponent,
    CLoopsComponent,
    CTopicsComponent,
    McqComponent,
    Mcq1Component,
    LogicalreasoningComponent,
    Lr1Component,
    Lr2Component,
    CodingComponent,
    QuizComponent,
    DiscussComponent,
    ForgetPwdComponent,
    ChangePwdComponent,
    AddiDetailsComponent,
    JavaComponent,
    JavaIntroComponent,
    JavaLoopsComponent,
    HtmlComponent,
    HtmlIntroComponent,
    HtmlEleComponent,
    HtmlMoreComponent,
    ChangeBgDirective,
    WelcomeQuizComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
