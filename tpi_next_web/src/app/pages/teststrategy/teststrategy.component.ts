import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-teststrategy',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './teststrategy.component.html',
  styleUrl: './teststrategy.component.css'
})
export class TeststrategyComponent implements OnInit {
    // FormGroup to hold the rating values for each question
    ratingForm!: FormGroup;

    // Array of questions
    questions = [
      {
        question: 'Produktrisiken, die den go live beinträchtigen könnten sind analysiert',
        help: 'Gibt es spezielle Testfälle für den go live? Zum Beispiel zur Überprüfung der wichtigsten Funktionalitätem?',
        artifact: 'Produktrisikoanalyse',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Produktrisiken sind in die Priorisierung der Testfälle einbezogen',
        help: 'Gibt es eine Priorisieurng der Testfälle? Wie wurde diese vorgenommen?',
        artifact: 'Teststrategie (enthalten in Testkonzept)',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Der finale Testaufwand/Ressourcen sind nach einer Risikoanalyse bestimmt worden',
        help: 'Ist der Zusammenhang zwischen Risiko und Aufwand betrachtet worden?',
        artifact: 'Teststrategie (enthalten in Testkonzept)',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Besonders risikobehaftete Softwarekomponenten oder Prozesse werden zuerst getestet (zeitlich)',
        help: 'Werden risikoreiche Softwarekomponenten zuerst getestet? Gibt es eine Übersicht dieser?',
        artifact: 'Teststrategie (enthalten in Testkonzept)',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Die Risiken werden bei verschiedenen Teststufen, Testarten und der Testabdeckung und Testintensität berücksichtigt',
        help: 'Erfolgt ein Test in verschiedenen Teststufen, die sich nach Ziel und Intensität unterscheiden? (Entwicklertests, Systemtest, Abnahmetests)',
        artifact: 'Teststrategie (enthalten in Testkonzept)',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Fehlernachtests und Regressiontests werden durchgeführt',
        help: 'Gibt es eine Empfehlung vom Entwickler wie viel getestet werden muss nach der Fehlerbehebung?',
        artifact: 'StakeholdermaTeststrategie (enthalten in Testkonzept)trix',
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
