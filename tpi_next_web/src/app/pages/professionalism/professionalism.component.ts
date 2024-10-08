import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-professionalism',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './professionalism.component.html',
  styleUrl: './professionalism.component.css'
})
export class ProfessionalismComponent implements OnInit {
    // FormGroup to hold the rating values for each question
    ratingForm!: FormGroup;

    // Array of questions
    questions = [
      {
        question: 'Die Tester planen ihre Testaktivitäten im Austausch mit den Kollegen, führend diese eigenständig durch und geben proaktiv Feedback.',
        help: 'Wie planen Sie Ihre Testaktvitäten? Beziehen Sie andere Kollegen aus dem Team mit ein? Was passiert wenn Sie krank werden oder Urlaub planen?',
        artifact: '',
        weight: 100,
        yourValue: 0
      },{
        question: 'Die Tester erhalten dedizierte Testschulungen oder haben bereits ausreichende Erfahrungen bei der strukturierten Testdurchführung.',
        help: 'Gibt es Schulungen zu Testvorgaben der FI? Ist eine Schulungsteilnehme bei Bedarf möglich für die Tester?',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Die Testmethode ist den Testern bekannt und wird eingesetzt.',
        help: '',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Das Testteam hat Zugang zu benötigtem Fachwissen und technischem Wissen.',
        help: '',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Die Tester sind zertifiziert nach ISTQB Fountation Level Tester',
        help: '',
        artifact: '',
        weight: 50,
        yourValue: 0
      },
      {
        question: 'Es gibt regelmäßige Leistungsbeurteilungen der Tester in Bezug auf Ihre Testfähigkeiten und IT-Fähigkeiten.',
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
