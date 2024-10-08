import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-planning',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './planning.component.html',
  styleUrl: './planning.component.css'
})
export class PlanningComponent implements OnInit {
    // FormGroup to hold the rating values for each question
    ratingForm!: FormGroup;

    // Array of questions
    questions = [
      {
        question: 'Es existiert eine Schätzung der benötigten Ressourcen pro Testaktivität',
        help: '',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Es gibt ein zugewiesenes Budget für jede Phase des Testprozesses.',
        help: '',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Der Auftraggeber wird aktiv in die Schätzungen einbezogen.',
        help: '',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Die Dauer der einzelnen Testaktivitäten (Testplanung, Testmanagement, Testdurchführung) , die benötigten Ressourcen und die zu erwartenden Ergebnisse sind bekannt ',
        help: '',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Die Testplanung berücksichtigt Abhängigkeiten zwischen einzelnen Phasen oder Aktivitäten.',
        help: 'Weren Abhängigkeiten zwischen Aktivitäten in der Testplanung berücksichtigt?',
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
