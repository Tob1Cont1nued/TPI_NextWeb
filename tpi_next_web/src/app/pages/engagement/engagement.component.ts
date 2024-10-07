import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

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
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './engagement.component.html',
  styleUrl: './engagement.component.css'
})
export class EngagementComponent implements OnInit {
  // FormGroup to hold the rating values for each question
  ratingForm!: FormGroup;
  totalScore: number = 0;

  // Array of questions
  questions: Question[] = [
    {
      question: 'Der Anforderungsmanager/Fachbereich zuständig für die Anforderungen ist bekannt',
      help: 'Wissen Sie wer für welche Anforderung fachlich zuständig ist?',
      artifact: 'Testfälle, Abnahmekriterien, Akzeptanzkriterien',
      weight: 50,
      yourValue: 0,
      rating: Rating.NONE
    },
    {
      question: 'Die Tester kennen den Auftraggeber',
      help: 'Wer ist Ihr Auftraggeber?',
      artifact: '',
      weight: 100,
      yourValue: 0,
      rating: Rating.NONE
    },
    {
      question: 'Der Auftraggeber hat das Budget bewilligt und dieses kann mit ihm verhandelt werden',
      help: 'Kann die Dauer des Tests mit dem Auftraggeber verhandelt werden?',
      artifact: '',
      weight: 50,
      yourValue: 0,
      rating: Rating.NONE
    },
    {
      question: 'Die Testressourcen werden von den Stakeholdern zur Verfügung gestellt.',
      help: 'Werden Tester aus den Fachbereichen nach Anfrage zur Verfügung gestellt?',
      artifact: 'Stakeholdermatrix',
      weight: 50,
      yourValue: 0,
      rating: Rating.NONE
    },
    {
      question: 'Der Auftraggeber hat eine dokumentierte Produktrisikoanalyse erstellt',
      help: 'Gibt es eine Risikoanalyse für die Software?',
      artifact: 'Stakeholdermatrix',
      weight: 50,
      yourValue: 0,
      rating: Rating.NONE
    },
    {
      question: 'Fachabteilungen, die mit dem Produkt arbeiten sind bekannt',
      help: 'Welche Abteilungen arbeiten alles mit der Software?',
      artifact: 'Stakeholdermatrix',
      weight: 50,
      yourValue: 0,
      rating: Rating.NONE
    },
    {
      question: 'Die Releaseprozesse und Ansprechpartner sind bekannt',
      help: 'Wer ist Hauptansprechpartner im Releasemanagement? Gibt es Freigabeszenarien für das Release?',
      artifact: 'Stakeholdermatrix',
      weight: 50,
      yourValue: 0,
      rating: Rating.NONE
    },
    {
      question: 'Die Entwickler sind bekannt',
      help: 'Gibt es Softwareentwickler? Wenn ja wer ist das? intern / extern?',
      artifact: 'Stakeholdermatrix',
      weight: 50,
      yourValue: 0,
      rating: Rating.NONE
    },
    {
      question: 'Die Softwarearchitekten sind bekannt',
      help: 'Gibt es Softwarearchitekten? Wenn ja wer ist das?',
      artifact: 'Stakeholdermatrix',
      weight: 50,
      yourValue: 0,
      rating: Rating.NONE
    },
    // Add all other questions here
  ];

  // Options for the dropdown
  ratingOptions = [
    { label: 'trifft vollständig zu', value: Rating.FULL },
    { label: 'trifft zum Teil zu', value: Rating.PARTIAL },
    { label: 'trifft nicht zu', value: Rating.NONE },
  ];

  constructor(private fb: FormBuilder) { }

  // ngOnInit(): void {
  //   const controls = this.questions.reduce((acc, _, index) => {
  //     acc[`rating${index}`] = new FormControl(Rating.NONE);
  //     return acc;
  //   }, {} as { [key: string]: FormControl });

  //   this.ratingForm = this.fb.group(controls);

  //   this.ratingForm.valueChanges.subscribe(() => {
  //     this.calculateTotalScore();
  //   });

  //   this.calculateTotalScore();
  // }


  ngOnInit(): void {
    // Explizite Typdeklaration, um TypeScript den Typ der FormControls zu definieren
    const controls: { [key: string]: FormControl } = {};

    this.questions.forEach((_, index) => {
      controls[`rating${index}`] = new FormControl(Rating.NONE);
    });

    this.ratingForm = this.fb.group(controls);
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

  calculateTotalScore(): void {
    this.totalScore = 0;
    this.questions.forEach(q => {
      this.totalScore += q.yourValue;
    });
  }

  // Function to handle form submission or changes
  onSubmit() {
    this.calculateTotalScore();
    alert(`Your total value: ${this.totalScore}`)
    console.log(this.ratingForm.value);
  }
}
