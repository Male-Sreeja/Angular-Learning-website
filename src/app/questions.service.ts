import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  sets:string[];
  set_no: number | undefined;
  set:string | undefined;
  rand:number | undefined;
  constructor(private http : HttpClient) { 
    this.sets=["/assets/documents/quiz_questions.json","/assets/documents/quiz_questions_1.json","/assets/documents/quiz_questions_2.json","/assets/documents/quiz_questions_3.json"];
  }
  getQuestionJson(){
    console.log("In getQuestionJson");
    console.log(this.set);
    console.log(this.set_no);
    this.rand=Math.random() * this.sets.length;
    console.log("random "+this.rand);
    this.set_no = Math.floor(this.rand);
    console.log("set no "+this.set_no);
    this.set = this.sets[this.set_no];
    return this.http.get<any>(this.set);
  }
}
