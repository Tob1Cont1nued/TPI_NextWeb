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
  findings: string;
  measures: string;
  interviewPartner: string;
}

@Component({
  selector: 'app-engagement',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, ReactiveFormsModule],
  templateUrl: './engagement.component.html',
  styleUrls: ['./engagement.component.css']
})
export class EngagementComponent implements OnInit {
  ratingForm!: FormGroup;
  maxRating: number = 0;
  questions: Question[] = [];
  Rating = Rating;

  ratingOptions: { label: string; value: Rating }[] = [];

  constructor(private fb: FormBuilder, private translate: TranslateService) {}

  // Initialisiert das Formular und die Fragen beim Laden der Komponente
  ngOnInit(): void {
    // Rating options
    this.translate.get(['dropdown.full', 'dropdown.partial', 'dropdown.none']).subscribe(translations => {
      this.ratingOptions = [
        { label: translations['dropdown.full'], value: Rating.FULL },
        { label: translations['dropdown.partial'], value: Rating.PARTIAL },
        { label: translations['dropdown.none'], value: Rating.NONE }
      ];
    });

    this.translate.get('questions.engagement').subscribe((data) => {
      const controls: { [key: string]: FormControl } = {};
      this.questions = Object.values(data);

      this.questions.forEach((question, index) => {
        // Initialisiert die FormControls für jede Frage
        controls[`rating${index}`] = new FormControl(Rating.NONE);
        controls[`findings${index}`] = new FormControl('');
        controls[`measures${index}`] = new FormControl('');
        controls[`interviewPartner${index}`] = new FormControl('');
        this.maxRating += Number(question.weight); // Summiert die Gewichtungen
      });

      this.ratingForm = this.fb.group(controls);

      // Abonniere valueChanges, um "Ihr Wert" zu berechnen, wenn das Dropdown geändert wird
      this.questions.forEach((question, index) => {
        this.ratingForm.get(`rating${index}`)?.valueChanges.subscribe(value => {
          this.calculateScoreForQuestion(question, value);
        });
      });
    });
  }

  // Berechnet den Wert für eine einzelne Frage basierend auf der Bewertung
  calculateScoreForQuestion(question: Question, newRating: Rating): void {
    question.rating = newRating;
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
  }

  // Berechnet die Werte für alle Fragen und zeigt das Gesamtergebnis an
  onSubmit(): void {
    let totalValue = 0;

    this.questions.forEach((question, index) => {
      const ratingControl = this.ratingForm.get(`rating${index}`);
      if (ratingControl) {
        const newRating = ratingControl.value;
        this.calculateScoreForQuestion(question, newRating);
        totalValue += Number(question.yourValue);
      }
    });

    alert(`Your total value: ${totalValue} / ${this.maxRating}`);
    console.log(this.ratingForm.value);
  }
}
