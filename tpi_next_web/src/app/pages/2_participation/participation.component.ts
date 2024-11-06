import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common'; // Import hinzufügen

@Component({
  selector: 'app-participation',
  standalone: true,
  imports: [ReactiveFormsModule, TranslateModule, CommonModule], // CommonModule hinzufügen
  templateUrl: './participation.component.html',
  styleUrls: ['./participation.component.css']
})
export class ParticipationComponent implements OnInit {
  ratingForm!: FormGroup;
  questions: any[] = [];
  ratingOptions = ['trifft vollständig zu', 'trifft zum Teil zu', 'trifft nicht zu'];

  constructor(private fb: FormBuilder, private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.get('questions.participation').subscribe((data) => {
      this.questions = Object.values(data);
      const controls: { [key: string]: FormControl } = {};

      this.questions.forEach((_, index) => {
        
        controls[`rating${index}`] = new FormControl('');
      });

    this.ratingForm = this.fb.group(controls);
    });
  }

  onSubmit() {
    console.log(this.ratingForm.value);
  }
}
