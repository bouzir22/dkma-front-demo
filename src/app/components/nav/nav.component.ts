import { LanguageService } from './../../services/language.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(private languageService: LanguageService) {}

  language = 'de';

  ngOnInit(): void {
    this.languageService
      .recieveLanguage()
      .subscribe((data) => (this.language = data));
  }

  switchEn() {
    this.languageService.sendMessage('en');
  }
  switchDe() {
    this.languageService.sendMessage('de');
  }
  switchAr() {
    this.languageService.sendMessage('ar');
  }

  switchFr() {
    this.languageService.sendMessage('fr');
  }
}
