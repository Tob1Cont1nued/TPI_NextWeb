import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-methodical-approach',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './methodical-approach.component.html',
  styleUrl: './methodical-approach.component.css'
})
export class MethodicalApproachComponent implements OnInit {
    // FormGroup to hold the rating values for each question
    ratingForm!: FormGroup;

    // Array of questions
    questions = [
      {
        question: 'Es gibt verschiedene definierte Testlevel/Teststufen, die im Projekt verfolgt werden (Unit Tests, Komponententests, Integrationstests, Regressionstests…)',
        help: '',
        artifact: 'Glossar, Abnahmekriterien',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Die Ziele der Testlevel/Teststufen sind dokumentiert und passen zur Teststrategie.',
        help: '',
        artifact: 'Testkonzept',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Die einzelnen Testlevel/Teststufen sind abgestimmt auf das Projektvorgehen/die Entwicklung und sind schriftlich festgehalten.',
        help: 'Sind die Umgebungen passend für den jeweiligen Test?',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Das Projekt- und Teststeam unterstützt die gewählten Testmethoden.',
        help: '',
        artifact: 'Sign Offs als Quality Gates',
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
