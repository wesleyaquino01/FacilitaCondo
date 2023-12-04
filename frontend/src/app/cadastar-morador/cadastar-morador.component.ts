import { Component, ViewChild } from '@angular/core';
import { MatTable} from '@angular/material/table';

export interface PeriodicElement {
  nome_completo: string;
  position: number;
  cpf: number;
  responsavel: boolean;
  telefone: string;
  numero_de_moradores: number;
  idade: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nome_completo: 'Wesley Aquino', cpf: 1.0079, idade: 23, responsavel: false, telefone: '1212121212', numero_de_moradores: 3},
  {position: 2, nome_completo: 'Simplicio Dias', cpf: 4.0026,idade: 47, responsavel: true, telefone: '1212121212', numero_de_moradores: 3},
  {position: 3, nome_completo: 'Selma Dias', cpf: 4.0026,idade: 47, responsavel: false, telefone: '1212121212',  numero_de_moradores: 3}
];

@Component({
  selector: 'app-cadastar-morador',
  templateUrl: './cadastar-morador.component.html',
  styleUrls: ['./cadastar-morador.component.scss']
})
export class CadastarMoradorComponent {
  displayedColumns: string[] = ['position', 'nome_completo', 'cpf', 'responsavel', 'telefone', 'numero_de_moradores', 'idade'];
  // displayedColumnsName: string[] = ['position', 'Nome Completo', 'CPF', 'Responsavel'];
  dataSource = [...ELEMENT_DATA];
  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;

  constructor(){
  }


  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }

}
