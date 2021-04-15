import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  count: any = 0;
  answer: any;
  questions: any[] = [
    {
      question: "*ngFor is used for Iterations.",
      ans1: "True",
      ans2: "False",
      ans: "True"
    },
    {
      question: "*ngIf is used for Iterations.",
      ans1: "True",
      ans2: "False",
      ans: "False"
    },
    ,
    {
      question: "*ngIf is used for checking the condition.",
      ans1: "True",
      ans2: "False",
      ans: "False"
    }
  ];

  changeQuest(): void {
    this.answer = null;
    this.count = this.count + 1;
  }
}
