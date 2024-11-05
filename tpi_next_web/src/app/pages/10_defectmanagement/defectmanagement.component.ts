import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-defectmanagement',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './defectmanagement.component.html',
  styleUrl: './defectmanagement.component.css'
})
export class DefectmanagementComponent implements OnInit {
    // FormGroup to hold the rating values for each question
    ratingForm!: FormGroup;

    // Array of questions
    questions = [
      {
        question: 'Es gibt ein Fehlermanagement inkl. Fehlerlebenszyklus das den Testteam/Entwicklerteam bekannt ist',
        help: 'Wie sind die Phasen des Fehlerlebenyzsklus? Wer entscheidet ob ein Fehler geschlossen wird? Wie sieht man, dass ein Fehler im System behoben ist?',
        artifact: 'Fehlerprozess',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Regelmäßige Fehlerbesprechungen unterstützen das Fehlermanagement',
        help: 'Gibt es regelmäßige Termine, um über bestimmte Fehler oder Fehleranfälligkeiten einer Komponente zu sprechen?',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Verantwortliche Personen im Fehlerprozess sind definiert (Tester/Entwickler/Umgebungsmanager/Testmanager…)',
        help: 'Wer ist alles im Fehlerprozess involviert und was sind seine Aufgaben?',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Genutzte Fehlermanagementwerkzeuge sind für verantwortliche Personen nutzbar.',
        help: 'Sind die Fehler für alle einsehbar? Sind die Schwere Definitionen transparent und bekannt? Gibt es spezielle Debugging Tools, die ebenfalls nutzbar sind?',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Der Umgang mit Fehlernachtests (komplett/partiell) ist definiert.',
        help: 'Was wird nach der Behebung eines Fehlers getestet? Gibt es hier Richtlinien wie viel erneut getestet wird (nur Fehler, gesamte fehlerhafte Komponente, Komponente mit anliegenden Komponenten)?',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Die Mindestattribute jedes Fehlers sind: Ersteller/Tester, ID, Datum, Schwere, Beschreibung (erwartetes vs. tatsächliches Ergebnis), Titel, Status',
        help: 'Welche Attribute werden in einem Fehler ausgefüllt?',
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
