import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-participation',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './participation.component.html',
  styleUrl: './participation.component.css'
})
export class ParticipationComponent implements OnInit {
    // FormGroup to hold the rating values for each question
    ratingForm!: FormGroup;

    // Array of questions
    questions = [
      {
        question: 'Der Umfang, der Testauftrag und das Vorgehen sind mit dem Auftraggeber vereinbart',
        help: 'Kennt der Auftraggeber die geschätzte Dauer vom Tests? Kennt er die Inhalte und hat diesen zugestimmt?',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Eine Person des Testtams wird in die Projektplanung einezogen, sodass Abhängigkeiten zwischen dem Testprozess und anderen Prozessen (z.B. Anforderungsmanagement) berücksichtigt werden können',
        help: 'Ist jemand aus dem Testteam von Anfang an im Projekt dabei? Bekommt er mit, wenn Anforderungen definiert sind und wenn Entwicklungsobjekte testbereit sind?',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Ein Tester wird bei der Analyse, Bewertung und des Managements von Projektrisiken einbezogen.',
        help: '',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Die Testplanung erfolgt gleichzeitig mit der Projektplanung',
        help: 'Wer erstellt die Projektplanung? Wann erfolgt die Testplanung?',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Nur die Testdurchführung befindet sich auf dem kritischen Projektpfad',
        help: 'Wann wird mit der Testvorbereitung gestatet? Wann endet sie? Wann erfolgen Abschlussaktivitäten wie z.B, Archivierung?',
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
