import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-testdesign',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './testdesign.component.html',
  styleUrl: './testdesign.component.css'
})
export class TestdesignComponent implements OnInit {
    // FormGroup to hold the rating values for each question
    ratingForm!: FormGroup;

    // Array of questions
    questions = [
      {
        question: 'Testfälle sind personenunabhängig wiederholbar (ähnlicher Wissensstand der Tester vorausgesetzt)',
        help: '',
        artifact: '',
        weight: 100,
        yourValue: 0
      },{
        question: 'Es werden zunächst logische Testfälle beschrieben, die dann konkretisiert werden',
        help: '',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Jeder Testfall enthält die folgenden Informationen: Ausgangssituation, Beschreibung der Aktionen im Testfall, dem erwarteten Ergebnis.',
        help: '',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Das zugehörige Testobjekt (=Teil der Testbasis, das getestet wird) ist im Testfall genannt.',
        help: '',
        artifact: '',
        weight: 100,
        yourValue: 0
      },
      {
        question: 'Checklisten oder formale Designtechniken werden zur Testfallerstellung eingesetzt.',
        help: '',
        artifact: 'Testdesignmethoden/Checklisten',
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
