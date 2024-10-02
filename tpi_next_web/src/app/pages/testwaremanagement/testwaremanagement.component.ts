import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-testwaremanagement',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './testwaremanagement.component.html',
  styleUrl: './testwaremanagement.component.css'
})
export class TestwaremanagementComponent implements OnInit {
    // FormGroup to hold the rating values for each question
    ratingForm!: FormGroup;

    // Array of questions
    questions = [
      {
        question: 'Es gibt ein für das Testteam zugängliches Versionsmanagement für die Testobjekte/Anforderungen (Versionsnummer und Name)',
        help: 'Ist sofort klar, welche Fehler zu welche Anfordeurngsverison gehören?',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Es gibt ein beschriebenes Verfahren mit dem Testware, Testbasis und Testobjekte verwaltet werden. Dieses ist dem Team bekannt.',
        help: '',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Die Testfälle beziehen sich jeweils auf eine Version/Dokument der Testbasis.',
        help: '',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Testfälle und Anforderungen sind miteinander verknüft.',
        help: 'Ist der Weg von Anforderung zu Testfall zu Fehler nachvollziehbar?',
        artifact: 'Abdeckungsmatrix',
        weight: 50,
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
