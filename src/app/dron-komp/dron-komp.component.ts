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
  energia: number = 0;
  currentStyles: Record<string, string> = {};
  onEnergiaClick(): void{
    if(this.energia < 100){
      this.energia = this.energia + 5;
    }
  }
  onMouseEntr(): void{
    this.currentStyles = {
      'font-size': '23px'
  }
}
  onMouseL(): void{
    this.currentStyles = {
      'font-size': '16px'
  }
}
}
