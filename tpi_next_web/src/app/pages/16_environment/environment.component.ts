import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-environment',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './environment.component.html',
  styleUrl: './environment.component.css'
})
export class EnvironmentComponent implements OnInit {
    // FormGroup to hold the rating values for each question
    ratingForm!: FormGroup;

    // Array of questions
    questions = [
      {
        question: 'Es gibt klar definierte Anforderungen an die Testumgebung.',
        help: 'Wie viele User können gleichzeitig die Umgebung nutzen? Welche Verfügbarkeiten gibt es? Welche Anforderungen hat der testende Fachbereich?',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Aufgaben und Verantwortlichkeiten zur Umgebung sind mit den zuständigen Parteien (z.B. Umgebungsmanager) definiert und abgestimmt.',
        help: 'Wer ist für die Umgebung verantwortlich? Wer informiert über Downtimes und Testzeiten?',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Die Umgebung steht in den definierten Testzeiträumen ohne Unterbrechung zur Verfügung.',
        help: 'Steht die Umgebung während des Tests uneingeschränkt zur Verfügung?',
        artifact: 'Umgebungskalender',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Änderungen der Testumgebung werden rechtzeitig an den Testmanager herangetragen. ',
        help: 'Gibt es ein Change Management für Änderungen? Wie werden TM und das Team über Änderungen informiert? Wie viel Vorlauafzeit gibt es bei Änderungen? Gibt es die Möglichkeit ein Veto einzulegen?',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Der Testmanager kann einen Freeze der Umgebung gemeinsam mit dem Projektleiter anfordern. ',
        help: 'Kann ein freeze der Umgebung eingefodert werden?',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Testdaten werden berücksichtigt',
        help: 'Sind Testdaten auf allen Umgebungen für den Test vorhanden? Sind diese vollständig nutzbar?',
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
