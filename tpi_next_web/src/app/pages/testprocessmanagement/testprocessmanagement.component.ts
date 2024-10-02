import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-testprocessmanagement',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './testprocessmanagement.component.html',
  styleUrl: './testprocessmanagement.component.css'
})
export class TestprocessmanagementComponent implements OnInit {
    // FormGroup to hold the rating values for each question
    ratingForm!: FormGroup;

    // Array of questions
    questions = [
      {
        question: 'Es gibt einen Testplan, der zeitlich festlegt wer was wann macht. Dieser umfasst alle Phasen des Testprozesses',
        help: 'Gibt es einen zeitlichen Plan, wann welche Teststufe durchlaufen wird? Sind dort Ressourcen für die jeweiligen Aufgaben eingeteilt? Sind Abwesenheiten berücksichtigt?',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Der Testplan beinhaltet den Testauftrag, den Zeitraum, die zeitliche Ressourcenplanung, die Rollen und Verantwortlichkeiten',
        help: 'Sind Ihnen die Testzeiträume bekannt?',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Die Erwartungen des Auftraggebers zu Umfang, Kosten und Qualität des Testens sind klar',
        help: '',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Ein Bericht gibt den Fortschritt des Testplans und geeignete Maßnahmen wieder.',
        help: '',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Der Testplan ist mit den Stakeholdern (+ Auftraggeber) abgestimmt',
        help: '',
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
