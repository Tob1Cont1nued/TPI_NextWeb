import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-testorganisation',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './testorganisation.component.html',
  styleUrl: './testorganisation.component.css'
})
export class TestorganisationComponent implements OnInit {
    // FormGroup to hold the rating values for each question
    ratingForm!: FormGroup;

    // Array of questions
    questions = [
      {
        question: 'Es gibt eine Organisations- oder Projekteinheit, die für den Testprodukte und Hilfestellungen verantwortlich ist',
        help: 'Es gibt eine Organisations- oder Projekteinheit, die für den Testprodukte und Hilfestellungen verantwortlich ist?',
        artifact: 'Aufgabenbeschreibung',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Es gibt eine Übersicht der Produkte und Dienstleistungen, die den Testern bekannt ist',
        help: 'Exisitiert eine Übersicht der Produkte und Dienstleistungen (z.B. Templates) der Abteilung?',
        artifact: 'Aufgabenbeschreibung',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Es gibt klar definierte Verantwortlichkeiten und eine Rollenübersicht (Tester, Testdesigner, Entwickler, Releasemanager, umgebungsmanager, Projektleiter, Testmanager, Defectmanager; inkl. Namen)',
        help: 'Gibt es klar definierte Verantwortlichkeiten? Kennen Sie Ihre Rolle und die Aufgaben? Fehlt der TM?',
        artifact: 'Rollendefinition/Org Chart',
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
