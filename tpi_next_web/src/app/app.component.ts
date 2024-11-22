import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule, TranslateModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  isCollapsed = false;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    // Überprüfe, ob der Code im Browser läuft
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language') || 'de-DE';
      this.translate.setDefaultLang(savedLang);
      this.translate.use(savedLang);
    } else {
      // Falls der Code auf dem Server läuft (z. B. Angular Universal), setze eine Standard-Sprache
      this.translate.setDefaultLang('de-DE');
      this.translate.use('de-DE');
    }
  }
  

  // Methode für den Wechsel der Sprache
/*  public switchLanguage(): void {
    const currentLang = this.translate.currentLang;

    // Bestimme die neue Sprache basierend auf der aktuellen
    let newLang;
    if (currentLang === 'de-DE') {
      newLang = 'en-GB';
    } else if (currentLang === 'en-GB') {
      newLang = 'fr-FR';
    } else {
      newLang = 'de-DE';
    }

    // Speichere die neue Sprache in localStorage und verwende sie
    localStorage.setItem('language', newLang);
    this.translate.use(newLang).subscribe(() => {
      console.log(`Sprache gewechselt zu ${newLang}`);
    });
    window.location.reload();
  }
*/
  public switchEN(): void {
    localStorage.setItem('language', 'en-GB');
    this.translate.use('en-GB').subscribe(() => {
      console.log(`Sprache gewechselt zu ${'en-GB'}`);
    });
    window.location.reload();
  }

  public switchDE(): void {
    localStorage.setItem('language', 'de-DE');
    this.translate.use('de-DE').subscribe(() => {
      console.log(`Sprache gewechselt zu ${'de-DE'}`);
    });
    window.location.reload();
  }

  public switchFR(): void {
    localStorage.setItem('language', 'fr-FR');
    this.translate.use('fr-FR').subscribe(() => {
      console.log(`Sprache gewechselt zu ${'fr-FR'}`);
    });
    window.location.reload();
  }
}
