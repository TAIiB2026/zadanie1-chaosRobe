import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-dron-komp',
  standalone: false,
  templateUrl: './dron-komp.component.html',
  styles: ``
})
export class DronKompComponent {
  @Input() licz: number = 0;
  @Input() dronNazwa: string = '';
}
