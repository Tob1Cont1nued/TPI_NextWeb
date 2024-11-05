import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

enum Rating {
  FULL = 'full',
  PARTIAL = 'partial',
  NONE = 'none'
}

interface Question {
  question: string;
  help: string;
  artifact: string;
  weight: number;
  yourValue: number;
  rating: Rating;
}

@Component({
  selector: 'app-engagement',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, ReactiveFormsModule],
  templateUrl: './engagement.component.html',
  styleUrl: './engagement.component.css'
})
export class EngagementComponent implements OnInit {
  // FormGroup to hold the rating values for each question
  ratingForm!: FormGroup;
  maxRating: number = 0;
  questions: any[] = [];

  // Options for the dropdown
  ratingOptions = [
    { label: 'trifft vollständig zu', value: Rating.FULL },
    { label: 'trifft zum Teil zu', value: Rating.PARTIAL },
    { label: 'trifft nicht zu', value: Rating.NONE },
  ];

  constructor(private fb: FormBuilder, private translate: TranslateService) {}

  /* ngOnInit(): void {
     const controls = this.questions.reduce((acc, _, index) => {
       acc[`rating${index}`] = new FormControl(Rating.NONE);
       return acc;
     }, {} as { [key: string]: FormControl });

     this.ratingForm = this.fb.group(controls);

     this.ratingForm.valueChanges.subscribe(() => {
     this.calculateTotalScore();
     });

     this.calculateTotalScore();
   }
  */


  ngOnInit(): void {
    // Explizite Typdeklaration, um TypeScript den Typ der FormControls zu definieren
    this.translate.get('questions.engagement').subscribe((data) => {
      this.questions = Object.values(data);
      const controls: { [key: string]: FormControl } = {};

      this.questions.forEach((question, index) => {
        controls[`rating${index}`] = new FormControl('');
        this.maxRating += question.rating;
      });

      this.ratingForm = this.fb.group(controls);
    });
  }


  calculateScore(newRating: any, question: Question): number {
    question.rating = newRating.value;
    switch (question.rating) {
      case Rating.FULL:
        question.yourValue = question.weight;
        break;
      case Rating.PARTIAL:
        question.yourValue = Math.floor(question.weight * 0.5);
        break;
      default:
        question.yourValue = 0;
        break;
    }
    return question.yourValue;
  }

  /*calculateTotalScore(): void {
    this.totalScore = 0;
    this.questions.forEach(q => {
      this.totalScore += q.yourValue;
    });
  }*/

  // Function to handle form submission or changes
  onSubmit() {
    //this.calculateTotalScore();
    alert(`Your total value: ${this.maxRating}`)
    console.log(this.ratingForm.value);
  }
}
