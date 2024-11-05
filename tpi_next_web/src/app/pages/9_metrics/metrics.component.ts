import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-metrics',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './metrics.component.html',
  styleUrl: './metrics.component.css'
})
export class MetricsComponent implements OnInit {
    // FormGroup to hold the rating values for each question
    ratingForm!: FormGroup;

    // Array of questions
    questions = [
      {
        question: 'Es werden Metriken verwendet, die das Testprojekt bewerten und  monitoren.',
        help: 'Gibt es Metriken, die das Testobjekt bewerten?',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Die benötigten Daten werden synchron ermittelt und alle Metriken werden zentral gespeichert.',
        help: 'Werden die zugrundeliegenden Daten der Metriken synchron ermittelt und zentral gespeichert?',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Es gibt Prüfungen zur Validierung der genutzen Daten (Stichproben)',
        help: 'Werden die genutzen Metriken stichprobenartig geprüft, ob die Daten valide sind bzw. Filter richtig eingestellt sind?',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Mindestens 7 der folgenden Metriken werden genutzt: Testüberdeckungsverhältnis, Anzahl Testfälle geplant/bereits erstellt, Testfortschritt (Ist/Plan), Testdurchführungsverhältnis, Fehlerschwere, Anzahl Produktionsfehler, Verbrauchter Budgetanteil, Testphasen/verbrauchte Stunden, Leerlaufrate, Testendekriterien)',
        help: 'Welche Metriken werden genutzt?',
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
