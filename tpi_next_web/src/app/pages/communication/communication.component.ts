import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-communication',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './communication.component.html',
  styleUrl: './communication.component.css'
})
export class CommunicationComponent implements OnInit {
    // FormGroup to hold the rating values for each question
    ratingForm!: FormGroup;

    // Array of questions
    questions = [
      {
        question: 'Die Teammitglieder werden über Entscheidungen im Projekt informiert',
        help: 'Wie erhalten Sie Informationen zu Entscheidungen im Projekt?',
        artifact: 'Kommunikationsplan (Was wird wann von wem kommuniziert und wer bekommt diese Info?)',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Alle Teammitglieder kennen den Status und die Phase in der sich das Projekt befindet',
        help: 'In welcher Projektphase befindet sich das Projekt aktuell? Wie ist der Status als Farbe gekennzeichnet?',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Entscheidungen, Handlungen und Ergebnisse des Testteams können zurückverfolgt werden',
        help: 'Wie werden Entscheidungen vom Testteam festgehalten? Wie kann ein neues Projektmitglied über bisherige Entscheidungen informiert werden?',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Es gibt regelmäßigen Austausch zwischen Testteam und Stakeholdern über: Projekt und Testfortschritt, Qualität des Produktes und Risiken',
        help: 'Gibt es ein Statusmeeting über den Testfortschritt und Fehler? Gibt es einen Statusbericht?',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Das Testteam gibt vorausschauend Hinweise auf Verzögerungen/Probleme im Test and die Stakeholder',
        help: 'Ist im Status eine Risikoabfrage vorhanden? Wie werden Probleme im Test adressiert? Gibt es Möglichkeiten der Handlung bei Problemen, oder müssen diese akzeptiert werden?',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Das Testteam fragt aktiv nach für den Test relevanten Informationen bei den Stakeholdern nach',
        help: 'Fragen Sie regelmäßig nach veränderten/aktualisierten Anforderungen oder neuen Entwicklungen?',
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
