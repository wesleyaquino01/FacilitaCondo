import { Component, Input } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
}

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent {
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight'];
  @Input() dataSource = ELEMENT_DATA;
}

const ELEMENT_DATA: PeriodicElement[] = [
  // {position: 1, name: 'Hydrogen', weight: 1.0079},
];
