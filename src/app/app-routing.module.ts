import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OldloginComponent } from './oldlogin/oldlogin.component';
import { RegisterComponent } from './register/register.component';
// import { loginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InterviewQAComponent } from './interview-qa/interview-qa.component';
import { ProgrammingComponent } from './programming/programming.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { PythonComponent } from './python/python.component';
import { PyIntroComponent } from './py-intro/py-intro.component';
import { ProfileComponent } from './profile/profile.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PyTopicsComponent } from './py-topics/py-topics.component';
import { PyLoopsComponent } from './py-loops/py-loops.component';
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
import { WelcomeQuizComponent } from './welcome-quiz/welcome-quiz.component';
const routes: Routes = [
  {path:"",component:MainpageComponent},
  {path:'login',component: OldloginComponent },
  {path:'register',component: RegisterComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'programLang',component:ProgrammingComponent},
  {path:'interview',component:InterviewQAComponent},
  {path:'showUsers',component:ShowUsersComponent},
  {path:'python',component:PythonComponent},
  {path:"pyIntro",component:PyIntroComponent},
  {path:"profile",component:ProfileComponent},
  {path:'mainpage',component:MainpageComponent},
  {path:"pyTopics",component:PyTopicsComponent},
  {path:"pyLoops",component:PyLoopsComponent},
  {path:"cpp",component:CppComponent},
  {path:"cppintro",component:CppIntroComponent},
  {path:"cpp_func",component:FunctionsComponent},
  {path:"cpp_more",component:CppMoreComponent},
  {path:"c",component:CComponent},
  {path:"cintro",component:CIntroComponent},
  {path:"c_loops",component:CLoopsComponent},
  {path:"c_topics",component:CTopicsComponent},
  {path:"mcq",component:McqComponent},
  {path:"mcq1",component:Mcq1Component},
  {path:"Logicalreasoning",component:LogicalreasoningComponent},
  {path:"LR1",component:Lr1Component},
  {path:"LR2",component:Lr2Component},
  {path:"coding",component:CodingComponent},
  {path:"quiz",component:QuizComponent},
  {path:"discuss",component:DiscussComponent},
  {path:"forget_pwd",component:ForgetPwdComponent},
  {path:"changePwd",component:ChangePwdComponent},
  {path:"addi_details",component:AddiDetailsComponent},
  {path:"java",component:JavaComponent},
  {path:"javaintro",component:JavaIntroComponent},
  {path:"jloops",component:JavaLoopsComponent},
  {path:"html",component:HtmlComponent},
  {path:"html-intro",component:HtmlIntroComponent},
  {path:"html_ele",component:HtmlEleComponent},
  {path:"html_attr",component:HtmlMoreComponent},
  {path:"w_quiz",component:WelcomeQuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }