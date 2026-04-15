import { Component } from '@angular/core';

@Component({
  selector: 'app-standalone-komp',
  standalone: true, 
  imports: [], 
  templateUrl: './standalone-komp.component.html'
})
export class StandaloneKompComponent {

  tekstTab: string[] = [
    'tekst1',
    'tekst2',
    'tekstTest',
  ];
}