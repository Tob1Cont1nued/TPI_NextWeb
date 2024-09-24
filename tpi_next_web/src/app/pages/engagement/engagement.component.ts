import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

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

    // Array of questions
    questions = [
      {
        question: 'Der Anforderungsmanager/Fachbereich zuständig für die Anforderungen ist bekannt',
        help: 'Wissen Sie wer für welche Anforderung fachlich zuständig ist?',
        artifact: 'Testfälle, Abnahmekriterien, Akzeptanzkriterien',
        weight: 50,
        yourValue: 25
      },
      {
        question: 'Die Tester kennen den Auftraggeber',
        help: 'Wer ist Ihr Auftraggeber?',
        artifact: '',
        weight: 100,
        yourValue: 100
      },
      {
        question: 'Der Auftraggeber hat das Budget bewilligt und dieses kann mit ihm verhandelt werden',
        help: 'Kann die Dauer des Tests mit dem Auftraggeber verhandelt werden?',
        artifact: '',
        weight: 50,
        yourValue: 25
      },
      {
        question: 'Die Testressourcen werden von den Stakeholdern zur Verfügung gestellt.',
        help: 'Werden Tester aus den Fachbereichen nach Anfrage zur Verfügung gestellt?',
        artifact: 'Stakeholdermatrix',
        weight: 50,
        yourValue: 25
      },
      {
        question: 'Der Auftraggeber hat eine dokumentierte Produktrisikoanalyse erstellt',
        help: 'Gibt es eine Risikoanalyse für die Software?',
        artifact: 'Stakeholdermatrix',
        weight: 50,
        yourValue: 25
      },
      {
        question: 'Fachabteilungen, die mit dem Produkt arbeiten sind bekannt',
        help: 'Welche Abteilungen arbeiten alles mit der Software?',
        artifact: 'Stakeholdermatrix',
        weight: 50,
        yourValue: 25
      },
      {
        question: 'Die Releaseprozesse und Ansprechpartner sind bekannt',
        help: 'Wer ist Hauptansprechpartner im Releasemanagement? Gibt es Freigabeszenarien für das Release?',
        artifact: 'Stakeholdermatrix',
        weight: 50,
        yourValue: 25
      },
      {
        question: 'Die Entwickler sind bekannt',
        help: 'Gibt es Softwareentwickler? Wenn ja wer ist das? intern / extern?',
        artifact: 'Stakeholdermatrix',
        weight: 50,
        yourValue: 25
      },
      {
        question: 'Die Softwarearchitekten sind bekannt',
        help: 'Gibt es Softwarearchitekten? Wenn ja wer ist das?',
        artifact: 'Stakeholdermatrix',
        weight: 50,
        yourValue: 25
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
