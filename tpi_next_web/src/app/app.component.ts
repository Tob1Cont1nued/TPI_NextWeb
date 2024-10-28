import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
// import { NzIconModule } from 'ng-zorro-antd/icon';
// import { NzLayoutModule } from 'ng-zorro-antd/layout';
// import { NzMenuModule } from 'ng-zorro-antd/menu';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  //imports: [CommonModule, RouterModule, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule, TranslateModule],
  imports: [CommonModule, RouterModule, RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('de-DE');

    debugger;
    var bla = this.translate.instant('questions.communication.1.question');
    var mitParam = this.translate.instant('mitParam', {sugar: "Bullshit"});
    this.translate.get('questions.communication.1.question').subscribe(value=>{
      console.log(value);
    });

    this.translate.onLangChange.subscribe(trans=>{
      console.log(trans);
    })

  }
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  public switchLanguage():void{
      this.translate.use('en-GB')
  }
  isCollapsed = false;
}