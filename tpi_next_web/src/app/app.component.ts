import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
 import { NzIconModule } from 'ng-zorro-antd/icon';
 import { NzLayoutModule } from 'ng-zorro-antd/layout';
 import { NzMenuModule } from 'ng-zorro-antd/menu';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule, TranslateModule],
  //imports: [CommonModule, RouterModule, RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
     // Set default language
     this.translate.setDefaultLang('de-DE');
     // Use the current language
     this.translate.use('de-DE');

  }
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  public switchLanguage(): void {
    const currentLang = this.translate.currentLang;
    console.log('Aktuelle Sprache:', currentLang);

    if (currentLang === 'de-DE') {
      this.translate.use('en-GB').subscribe(() => {
        console.log('Englische Übersetzungen geladen:', this.translate.instant('questions.communication'));
      });
  } else if (currentLang === 'en-GB') {
      this.translate.use('fr-FR').subscribe(() => {
        console.log('Französische Übersetzungen geladen:', this.translate.instant('questions.communication'));
      });
  } else if (currentLang === 'fr-FR') {
      this.translate.use('de-DE').subscribe(() => {
        console.log('Deutsche Übersetzungen geladen:', this.translate.instant('questions.communication'));
      });
  }
}
  isCollapsed = false;
}