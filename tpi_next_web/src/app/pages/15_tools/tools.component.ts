import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.css'
})
export class ToolsComponent implements OnInit {
    // FormGroup to hold the rating values for each question
    ratingForm!: FormGroup;

    // Array of questions
    questions = [
      {
        question: 'Testwerkzeuge, die für die Testaktivitäten benötigt werden sind zugänglich für das Testteam (z.B. Planungswerkzeuge, Stubs, Steuerungswerkzeuge, Testdurchführungswerkzege)',
        help: 'Welche Testwerkzeuge werden genutzt? Sind diese zugänglich für das gesamte Team?',
        artifact: 'Toolauswahl',
        weight: 100,
        yourValue: 0
      },{
        question: 'Das Testteam kennt die eingesetzten Werkzeuge.',
        help: 'N/A Ergibt sich aus Antworten der ersten Frage',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Die beteiligten Stakeholder des Werkzeuges (Einkauf, Projekt, Testteam) sind überzeugt vom Nutzen des Werkzeuges.',
        help: '',
        artifact: '',
        weight: 0,
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
