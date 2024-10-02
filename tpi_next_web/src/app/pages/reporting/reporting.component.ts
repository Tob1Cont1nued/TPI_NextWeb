import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reporting',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './reporting.component.html',
  styleUrl: './reporting.component.css'
})
export class ReportingComponent implements OnInit {
    // FormGroup to hold the rating values for each question
    ratingForm!: FormGroup;

    // Array of questions
    questions = [
      {
        question: 'Es gibt regelmäßige schriftliche Berichte über den Testfortschritt (IST/PLAN) in Bezug auf Zeit, Budget, Testfällen, Fehler',
        help: 'Gibt es Testberichte zum Fortschritt gegliedert nach Zeit/Budget/Testfällen und Fehlern?',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Die Berichte enthalten Ergebnisse und Risiken',
        help: 'Enthalten die Berichte Ergebnisse und Risiken?',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Die Stakeholder sind zufrieden mit dem Inhalt, der Qualität und der Häufigkeit der BerichteDer Auftraggeber hat das Budget bewilligt und dieses kann mit ihm verhandelt werden',
        help: 'Sind Sie zufrieden mit dem Inhalt, der Qualität und der Häufigkeit der Berichte?',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Produktrisiken und Projektrisiken sind in die Berichte einbezogen',
        help: 'N/A für Kunden',
        artifact: '',
        weight: 50,
        yourValue: 0
      },
      {
        question: 'Es gibt Trendanalysen über Fehler/Testfälle',
        help: 'N/A für Kunden',
        artifact: '',
        weight: 50,
        yourValue: 0
      },
      {
        question: 'Die Berichte enthalten Empfehlungen für Entscheidungen',
        help: 'N/A für Kunden',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      // Add all other questions here
    ];
  
    // Options for the dropdown
    ratingOptions = ['trifft vollständig zu', 'trifft zum Teil zu', 'trifft nicht zu'];
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Explizite Typdeklaration, um TypeScript den Typ der FormControls zu definieren
    const controls: { [key: string]: FormControl } = {};

    this.questions.forEach((_, index) => {
      controls[`rating${index}`] = new FormControl('');
    });

    this.ratingForm = this.fb.group(controls);
  }

  // Function to handle form submission or changes
  onSubmit() {
    console.log(this.ratingForm.value);
  }
}
